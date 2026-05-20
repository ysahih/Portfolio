"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Contexts/ThemeContext";
import { SunIcon, MoonIcon, Menu, X } from "lucide-react";

interface NavigationBarProps {
  activeSection: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Results" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 transition-all duration-300 ${
        isScrolled
          ? "shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={isScrolled ? { background: 'var(--navbar-bg-scrolled)' } : {}}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <div className="flex items-center">
            <img
              src="./ucefLogo.png"
              alt="Logo"
              className="h-14 w-14"
            />
            <span style={{ color: 'var(--accent)' }}>
              Youssef
            </span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium transition-colors duration-300 relative"
              style={{
                color: activeSection === item.id ? 'var(--accent)' : 'var(--text-secondary)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: 'var(--accent)' }}
                  layoutId="navIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}

          <motion.button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-full transition-colors duration-300"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <motion.button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-full transition-colors duration-300"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
            )}
          </motion.button>

          <motion.button
            className="p-2 rounded-md transition-colors duration-300"
            style={{ color: 'var(--text-primary)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 shadow-lg rounded-b-lg py-4 lg:hidden"
          style={{ background: 'var(--navbar-bg-mobile)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-2 text-base font-medium transition-colors duration-300"
                style={{
                  color: activeSection === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavigationBar;
