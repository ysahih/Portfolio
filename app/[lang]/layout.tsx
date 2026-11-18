import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '../Contexts/ThemeContext';
import { Inter, Syne, Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import StarField from '../components/StarField';
import CustomCursor from '../components/CustomCursor';
import { locales, isLocale, SITE_URL, type Locale } from '../i18n/config';
import { getDictionary } from '../i18n/get-dictionary';
import { DictionaryProvider } from '../i18n/DictionaryContext';
import { RESUME_DATA } from '../data/resume-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const syne = Syne({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
  variable: '--font-syne',
});

// Display font for the hero name — distinctive, modern grotesque
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
});

// Only /fr and /en exist; any other first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const { meta } = getDictionary(params.lang);
  const url = `${SITE_URL}/${params.lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: ['alternance', 'apprentissage', 'React', 'TypeScript', 'Next.js', 'Cypress', 'Playwright', 'frontend', 'fullstack', 'QA automation', 'Paris', '42 Paris'],
    authors: [{ name: RESUME_DATA.name }],
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/fr`,
      },
    },
    openGraph: {
      type: 'profile',
      url,
      siteName: RESUME_DATA.name,
      locale: meta.ogLocale,
      alternateLocale: params.lang === 'fr' ? ['en_US'] : ['fr_FR'],
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    icons: {
      icon: '/logo-128.png',
      apple: '/logo-128.png',
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const lang: Locale = params.lang;
  const dict = getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: RESUME_DATA.name,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}${RESUME_DATA.avatarUrl}`,
    description: dict.meta.description,
    jobTitle: dict.meta.jobTitle,
    address: { '@type': 'PostalAddress', addressLocality: 'Paris', postalCode: '75017', addressCountry: 'FR' },
    email: RESUME_DATA.contact.email,
    telephone: RESUME_DATA.contact.tel.replace(/\s/g, ''),
    knowsLanguage: ['ar', 'en', 'fr'],
    alumniOf: { '@type': 'EducationalOrganization', name: '1337 Coding School (42 Network)' },
    sameAs: [
      'https://github.com/ysahih',
      'https://www.linkedin.com/in/youssef-sahih/',
      'https://x.com/uc3f02',
    ],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Cypress', 'Playwright', 'NestJS', 'Node.js', 'PostgreSQL', 'Docker'],
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} ${syne.variable} ${bricolage.variable} antialiased`}
        style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}
      >
        <StarField />
        {/* Calms the starfield below the hero so every section's text stays readable */}
        <div className="content-veil" aria-hidden />
        <CustomCursor />
        <ThemeProvider>
          <DictionaryProvider locale={lang} dict={dict}>
            <Toaster position="top-right" />
            {children}
          </DictionaryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
