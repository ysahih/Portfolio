"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";

interface FooterProps {
  socialLinks: {
    name: string;
    url: string;
    icon: any;
  }[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer style={{ background: 'var(--card-surface)', borderTop: '1px solid var(--border)' }} className="py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 mb-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <div className="flex items-center">
                <img src="./ucefLogo.png" alt="Logo" className="h-14 w-14" />
                <span className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                  Youssef Sahih
                </span>
              </div>
            </a>
            <p className="opacity-60 mt-4 mb-6 max-w-md">
              Frontend &amp; Fullstack Engineer building production-grade web applications with React, Next.js, and Node.js.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ opacity: 0.6 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; (e.currentTarget as HTMLElement).style.color = ''; }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors"
                    style={{ opacity: 0.6 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; (e.currentTarget as HTMLElement).style.color = ''; }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:youssefsahih9@gmail.com"
                  className="transition-colors"
                  style={{ opacity: 0.6 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; (e.currentTarget as HTMLElement).style.color = ''; }}
                >
                  youssefsahih9@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+212708978739"
                  className="transition-colors"
                  style={{ opacity: 0.6 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; (e.currentTarget as HTMLElement).style.color = ''; }}
                >
                  +212 708 978 739
                </a>
              </li>
              <li className="opacity-60">Morocco</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="opacity-60 text-sm">
            © 2026 Youssef Sahih — Frontend &amp; Fullstack Engineer
          </p>
          <p className="opacity-60 text-sm mt-2 md:mt-0">
            Designed & Built with <span className="text-red-500">♥</span> by
            Youssef Sahih
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-40 ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}
        style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
