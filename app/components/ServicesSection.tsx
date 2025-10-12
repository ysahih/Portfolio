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
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional web development services designed to help your business grow online
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary dark:text-primary-light" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-left w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary dark:bg-primary-light rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to grow your business online?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help you reach more customers and increase your revenue
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's build your website
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
