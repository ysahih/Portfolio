"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, MailIcon, XIcon } from 'lucide-react';

interface StickyContactCTAProps {
  phone: string;
  email: string;
}

const StickyContactCTA: React.FC<StickyContactCTAProps> = ({ phone, email }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 50% of the page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {!isMinimized ? (
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Let's work together!
              </h3>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <XIcon className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Ready to build your website? Get in touch and let's discuss your project.
            </p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <motion.a
                href={`https://wa.me/${phone.replace(/\D/g, '')}?text=Hi%20Youssef,%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircleIcon className="w-4 h-4" />
                WhatsApp
              </motion.a>
              
              <motion.a
                href={`mailto:${email}?subject=Website%20Development%20Inquiry`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MailIcon className="w-4 h-4" />
                Email
              </motion.a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsMinimized(false)}
            className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-2xl transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <MessageCircleIcon className="w-6 h-6" />
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyContactCTA;
