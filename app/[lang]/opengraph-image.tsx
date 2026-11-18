import { ImageResponse } from 'next/og';
import { locales, isLocale } from '../i18n/config';
import { getDictionary } from '../i18n/get-dictionary';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateImageMetadata({ params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : 'fr';
  return [{ id: 'og', size, contentType, alt: getDictionary(lang).meta.ogAlt }];
}

/* Generated at build time, in the site's night-ink / saffron palette. */
export default function OpengraphImage({ params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : 'fr';
  const { meta } = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'radial-gradient(circle at 85% 15%, #1d1a2e 0%, #0a0c16 60%)',
          color: '#eceef5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#f2b544', letterSpacing: 4 }}>SAHIH.CODES</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Youssef Sahih</div>
          <div style={{ fontSize: 46, marginTop: 24, color: '#a3a9bc' }}>{meta.ogRole}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 22 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#f2b544',
              padding: '14px 26px',
              borderRadius: 999,
              border: '2px solid rgba(242,181,68,0.35)',
              background: 'rgba(242,181,68,0.10)',
            }}
          >
            {meta.ogTagline}
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#7a8098' }}>138 PRs · 109 Cypress · 133 Playwright</div>
        </div>
      </div>
    ),
    size
  );
}
