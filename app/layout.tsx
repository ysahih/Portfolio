import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './Contexts/ThemeContext';
import { Inter, Syne, Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import StarField from './components/StarField';
import CustomCursor from './components/CustomCursor';

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

export const metadata: Metadata = {
  title: 'Youssef Sahih — Frontend & Fullstack Engineer',
  description: 'Fullstack Engineer with 3+ years building production systems — React/Next.js frontends, NestJS backends, PostgreSQL databases, and containerized deployments.',
  keywords: ['frontend engineer', 'fullstack engineer', 'React', 'Next.js', 'TypeScript', 'NestJS', 'Node.js', 'Morocco'],
  authors: [{ name: 'Youssef Sahih' }],
  openGraph: {
    type: 'website',
    url: 'https://sahih.codes/',
    title: 'Youssef Sahih — Frontend & Fullstack Engineer',
    description: 'Fullstack Engineer with 3+ years building production systems — React/Next.js frontends, NestJS backends, PostgreSQL databases, and containerized deployments.',
    images: [{ url: 'https://sahih.codes/portfolio-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Sahih — Frontend & Fullstack Engineer',
    description: 'Fullstack Engineer with 3+ years building production systems — React/Next.js frontends, NestJS backends, PostgreSQL databases, and containerized deployments.',
    images: ['https://sahih.codes/portfolio-preview.png'],
  },
  icons: {
    icon: '/ucefLogo.png',
    apple: '/ucefLogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Youssef Sahih',
              url: 'https://sahih.codes',
              image: 'https://sahih.codes/ysahih.png',
              description: 'Fullstack Engineer with 3+ years building production systems across the entire stack.',
              jobTitle: 'Frontend & Fullstack Engineer',
              worksFor: { '@type': 'Organization', name: "Im'enSe" },
              address: { '@type': 'PostalAddress', addressCountry: 'Morocco' },
              email: 'youssefsahih9@gmail.com',
              telephone: '+212708978739',
              sameAs: [
                'https://github.com/ysahih',
                'https://www.linkedin.com/in/youssef-sahih/',
                'https://x.com/uc3f02',
              ],
              knowsAbout: ['React', 'Next.js', 'TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'Docker', 'Real-Time Systems', 'AI Integration'],
            }),
          }}
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
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
