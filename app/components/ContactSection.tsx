"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon, AlertCircleIcon, LanguagesIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { toast } from 'react-hot-toast';
import { viewportOnce } from '../lib/motion';
import { useDictionary } from '../i18n/DictionaryContext';
import { RESUME_DATA } from '../data/resume-data';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/* formEnabled is resolved on the server (RESEND_API_KEY present at build
   time). Without it the form is replaced by direct mailto/tel links, so a
   visitor never meets a form that cannot deliver. */
const ContactSection: React.FC<{ formEnabled: boolean }> = ({ formEnabled }) => {
  const { dict } = useDictionary();
  const t = dict.contact;
  const f = t.form;
  const contact = RESUME_DATA.contact;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  // Honeypot: hidden from people, often filled in by bots.
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = f.errors.nameRequired;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = f.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = f.errors.emailInvalid;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = f.errors.subjectRequired;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = f.errors.messageRequired;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(f.toastFix);
      return;
    }

    setFormStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Request failed');
      }

      setFormStatus('success');
      toast.success(f.toastSuccess);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset to idle after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      setFormStatus('error');
      toast.error(f.toastError);
      console.error('Contact error:', error);

      // Reset to idle after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="contact">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          index="06"
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-8">
            <motion.a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MailIcon className="w-5 h-5" />
              {t.sendEmail}
            </motion.a>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="text-2xl font-semibold mb-8">{t.infoTitle}</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-lg" style={{ color: 'var(--accent)' }}>
                  <MailIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">{t.emailLabel}</h4>
                  <a href={`mailto:${contact.email}`} className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={e => (e.currentTarget.style.color='var(--accent)')} onMouseLeave={e => (e.currentTarget.style.color='var(--text-secondary)')}>
                    {contact.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-lg" style={{ color: 'var(--accent)' }}>
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">{t.phoneLabel}</h4>
                  <a href={`tel:${contact.tel.replace(/\s/g, '')}`} className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={e => (e.currentTarget.style.color='var(--accent)')} onMouseLeave={e => (e.currentTarget.style.color='var(--text-secondary)')}>
                    {contact.tel}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-lg" style={{ color: 'var(--accent)' }}>
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">{t.locationLabel}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{t.location}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-primary/10 p-3 rounded-lg" style={{ color: 'var(--accent)' }}>
                  <LanguagesIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg mb-1">{t.languagesLabel}</h4>
                  <ul style={{ color: 'var(--text-secondary)' }}>
                    {t.languages.map((lang) => (
                      <li key={lang.name}>{lang.name} — {lang.level}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <h4 className="font-medium text-lg mb-3">{t.connect}</h4>
              <div className="flex space-x-4">
                {contact.social.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    aria-label={platform.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-300"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <platform.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl p-8" style={{ background: 'var(--card-surface)', border: '1px solid var(--border)', boxShadow: '0 12px 40px -16px rgba(0,0,0,0.6)' }}>
              <h3 className="text-2xl font-semibold mb-6">{formEnabled ? f.title : t.fallback.title}</h3>

              {!formEnabled ? (
                <div className="space-y-6">
                  <p style={{ color: 'var(--text-secondary)' }}>{t.fallback.body}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                      style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
                    >
                      <MailIcon className="w-5 h-5" />
                      {t.sendEmail}
                    </a>
                    <a
                      href={`tel:${contact.tel.replace(/\s/g, '')}`}
                      className="flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    >
                      <PhoneIcon className="w-5 h-5" />
                      {t.fallback.call}
                    </a>
                  </div>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {f.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: errors.name ? '#ef4444' : 'var(--border)' }}
                    placeholder={f.namePlaceholder}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {f.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: errors.email ? '#ef4444' : 'var(--border)' }}
                    placeholder={f.emailPlaceholder}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {f.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: errors.subject ? '#ef4444' : 'var(--border)' }}
                    placeholder={f.subjectPlaceholder}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    {f.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: errors.message ? '#ef4444' : 'var(--border)' }}
                    placeholder={f.messagePlaceholder}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                      formStatus === 'submitting' ? 'cursor-not-allowed' : ''
                    }`}
                    style={{
                      background: formStatus === 'submitting' ? 'var(--surface)' : formStatus === 'success' ? '#22c55e' : formStatus === 'error' ? '#ef4444' : 'var(--accent)',
                      color: formStatus === 'success' || formStatus === 'error' || formStatus === 'submitting' ? '#fff' : 'var(--bg)',
                      opacity: formStatus === 'submitting' ? 0.6 : 1,
                    }}
                    disabled={formStatus === 'submitting'}
                    whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                    whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {f.sending}
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                        {f.sent}
                      </span>
                    ) : formStatus === 'error' ? (
                      <span className="flex items-center">
                        <AlertCircleIcon className="w-5 h-5 mr-2" />
                        {f.failed}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <SendIcon className="w-5 h-5 mr-2" />
                        {f.send}
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;