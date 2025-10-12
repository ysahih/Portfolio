"use client";

import './globals.css';
import { ThemeProvider } from './Contexts/ThemeContext';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Youssef Sahih - Web Developer & Software Engineer | sahih.tech</title>
        <meta name="description" content="Professional web developer specializing in React, Next.js, and modern web technologies. Building fast, mobile-ready websites for local businesses. Contact for your next project." />
        <meta name="keywords" content="web developer, React developer, Next.js, TypeScript, frontend developer, Morocco, Agadir, website development, SEO optimization" />
        <meta name="author" content="Youssef Sahih" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sahih.tech/" />
        <meta property="og:title" content="Youssef Sahih - Web Developer & Software Engineer" />
        <meta property="og:description" content="Professional web developer specializing in React, Next.js, and modern web technologies. Building fast, mobile-ready websites for local businesses." />
        <meta property="og:image" content="https://sahih.tech/portfolio-preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sahih.tech/" />
        <meta property="twitter:title" content="Youssef Sahih - Web Developer & Software Engineer" />
        <meta property="twitter:description" content="Professional web developer specializing in React, Next.js, and modern web technologies. Building fast, mobile-ready websites for local businesses." />
        <meta property="twitter:image" content="https://sahih.tech/portfolio-preview.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/ucefLogo.png" />
        <link rel="apple-touch-icon" href="/ucefLogo.png" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/ucefLogo.png" as="image" />
        <link rel="preload" href="/ysahih.png" as="image" />
        
        {/* Devicons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Youssef Sahih",
              "url": "https://sahih.tech",
              "image": "https://sahih.tech/ysahih.png",
              "description": "Professional web developer specializing in React, Next.js, and modern web technologies",
              "jobTitle": "Web Developer & Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Im'enSe"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Morocco"
              },
              "email": "ucefsahih@gmail.com",
              "telephone": "+212708978739",
              "sameAs": [
                "https://github.com/ysahih",
                "https://www.linkedin.com/in/youssef-sahih/",
                "https://x.com/uc3f02"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Frontend Development",
                "SEO Optimization"
              ]
            })
          }}
        />
      </Head>
      <body className={`${inter.className} antialiased transition-colors duration-300 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <ThemeProvider>
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}