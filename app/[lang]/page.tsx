import Portfolio from '../components/Portfolio';

export default function Page() {
  // Evaluated at build time (the page is static). Set RESEND_API_KEY in the
  // hosting environment to show the contact form; otherwise mailto/tel only.
  const contactFormEnabled = Boolean(process.env.RESEND_API_KEY);
  return <Portfolio contactFormEnabled={contactFormEnabled} />;
}
