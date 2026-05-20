"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, QuoteIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Benali",
    role: "Business Owner",
    company: "Plombier Rapide Agadir",
    content: "Youssef transformed our online presence completely. We now have 3 active users across Morocco, and our project page gets 50% of all website traffic. The analytics show users from Casablanca, El Jadida, and 5+ other cities. Incredible results!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Fatima Alami",
    role: "Marketing Director",
    company: "Local Restaurant Chain",
    content: "Working with Youssef was a game-changer. He set up our Google Analytics and Google Business Profile perfectly. We can now track exactly where our customers are coming from and our local visibility has improved dramatically.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Omar Tazi",
    role: "CEO",
    company: "Tech Startup",
    content: "Youssef's technical skills are outstanding. He built us a fast, mobile-ready website that converts visitors into customers. His attention to detail and modern development practices really show in the final product.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Aicha Mansouri",
    role: "E-commerce Manager",
    company: "Online Store",
    content: "The website Youssef created for us is not only beautiful but also incredibly fast. Our bounce rate dropped by 40% and sales increased by 60% in the first month. Highly recommend his services!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

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
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Results & Testimonials"
          subtitle="See what my clients say about the results they've achieved"
          centered
        />

        {/* Main Testimonial Carousel */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            {/* Quote Icon */}
            <div className="absolute top-6 left-6" style={{ color: 'rgba(79,195,247,0.15)' }}>
              <QuoteIcon className="w-12 h-12" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden" style={{ background: 'var(--surface)' }}>
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300`}
                style={{ background: index === currentIndex ? 'var(--accent)' : 'var(--border)', transform: index === currentIndex ? 'scale(1.25)' : 'scale(1)' }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Results Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center rounded-xl p-6"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>50%</div>
            <div style={{ color: 'var(--text-secondary)' }}>Project Traffic Share</div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center rounded-xl p-6"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>5+</div>
            <div style={{ color: 'var(--text-secondary)' }}>Cities Across Morocco</div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center rounded-xl p-6"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>10</div>
            <div style={{ color: 'var(--text-secondary)' }}>Page Views (Real-time)</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
