import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './Contexts/ThemeContext';
import { Inter, Syne } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Youssef Sahih - Web Developer & Software Engineer',
  description: 'Professional web developer specializing in React, Next.js, and modern web technologies. Building fast, mobile-ready websites for local businesses.',
  keywords: ['web developer', 'React developer', 'Next.js', 'TypeScript', 'frontend developer', 'Morocco', 'Agadir'],
  authors: [{ name: 'Youssef Sahih' }],
  openGraph: {
    type: 'website',
    url: 'https://sahih.codes/',
    title: 'Youssef Sahih - Web Developer & Software Engineer',
    description: 'Professional web developer specializing in React, Next.js, and modern web technologies.',
    images: [{ url: 'https://sahih.codes/portfolio-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Sahih - Web Developer & Software Engineer',
    description: 'Professional web developer specializing in React, Next.js, and modern web technologies.',
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
              description: 'Professional web developer specializing in React, Next.js, and modern web technologies',
              jobTitle: 'Web Developer & Software Engineer',
              worksFor: { '@type': 'Organization', name: "Im'enSe" },
              address: { '@type': 'PostalAddress', addressCountry: 'Morocco' },
              email: 'ucefsahih@gmail.com',
              telephone: '+212708978739',
              sameAs: [
                'https://github.com/ysahih',
                'https://www.linkedin.com/in/youssef-sahih/',
                'https://x.com/uc3f02',
              ],
              knowsAbout: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development', 'SEO Optimization'],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${syne.variable} antialiased`}
        style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}
      >
        <StarField />
        <CustomCursor />
        <ThemeProvider>
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
