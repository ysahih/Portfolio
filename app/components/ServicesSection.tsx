"use client";

import { motion } from 'framer-motion';
import {
  GlobeIcon, 
  SearchIcon, 
  BarChart3Icon, 
  MapPinIcon,
  SmartphoneIcon,
  ZapIcon,
  ShieldIcon,
  UsersIcon
} from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: GlobeIcon,
    title: "Local Business Websites",
    description: "Fast, mobile-ready websites that convert visitors into customers",
    features: ["Mobile-first design", "Lightning-fast loading", "SEO optimized", "Contact forms"]
  },
  {
    icon: SearchIcon,
    title: "SEO Optimization",
    description: "Get found on Google with strategic search engine optimization",
    features: ["Keyword research", "On-page optimization", "Local SEO", "Performance tracking"]
  },
  {
    icon: BarChart3Icon,
    title: "Analytics Setup",
    description: "Track your website performance with Google Analytics 4",
    features: ["GA4 implementation", "Goal tracking", "Conversion monitoring", "Custom reports"]
  },
  {
    icon: MapPinIcon,
    title: "Google Business Profile",
    description: "Optimize your local presence and get more customers",
    features: ["Profile optimization", "Review management", "Local listings", "Insights tracking"]
  }
];

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
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
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="services">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="What I Offer"
          subtitle="Professional web development services designed to help your business grow online"
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="rounded-xl p-6 group" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }} whileHover={{ y: -5, borderColor: 'var(--accent)' }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full mb-4" style={{ background: 'rgba(79,195,247,0.1)', color: 'var(--accent)' }}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="rounded-2xl p-8" style={{ background: 'rgba(79,195,247,0.08)', border: '1px solid rgba(79,195,247,0.2)' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Ready to grow your business online?</h3>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>Let&apos;s discuss how I can help you reach more customers and increase your revenue</p>
            <motion.a href="#contact" className="inline-block px-8 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--accent)', color: '#070710' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Let&apos;s build your website
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
