"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon, CalendarIcon, UserIcon, TargetIcon, CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyData {
  slug: string;
  title: string;
  client: string;
  clientType: string;
  duration: string;
  role: string;
  goal: string;
  problem: string;
  solution: string;
  tools: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  screenshots: {
    desktop: string;
    mobile: string;
    contact?: string;
    analytics?: string;
  };
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  challenges: string[];
  learnings: string[];
}

// Mock data - replace with actual project data
const caseStudyData: CaseStudyData = {
  slug: "plombier-rapide-agadir",
  title: "Plombier Rapide Agadir - Local Business Website",
  client: "Plombier Rapide Agadir",
  clientType: "Local Plumbing Service",
  duration: "2 weeks",
  role: "Full-Stack Developer & SEO Specialist",
  goal: "Create a fast, mobile-ready website that helps the business get more customers from Google searches",
  problem: "The business had no online presence and was losing potential customers to competitors who appeared first in Google searches for plumbing services in Agadir.",
  solution: "Built a modern, SEO-optimized website with Google Business Profile integration, local SEO optimization, and analytics tracking to help the business rank higher and convert more visitors into customers.",
  tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Analytics 4", "Google Business Profile", "SEO Tools"],
  results: [
    {
      metric: "Real-time Active Users",
      value: "3 users",
      description: "Currently active users across Morocco"
    },
    {
      metric: "Project Page Views",
      value: "5 views (50%)",
      description: "Plombier project gets 50% of total website traffic"
    },
    {
      metric: "Geographic Reach",
      value: "5+ cities",
      description: "Users from Casablanca, El Jadida, Sidi Rahal, Berrechid, Settat"
    },
    {
      metric: "Total Page Views",
      value: "10 events",
      description: "High engagement with 38.46% page view rate"
    }
  ],
  screenshots: {
    desktop: "/PlombierDesktop.png",
    mobile: "/MobilePlombier.png", 
    contact: "/Plombiercontactpage.png",
    analytics: "/analytics-dashboard.png"
  },
  testimonial: {
    text: "Youssef transformed our online presence completely. Our website now loads in under 2 seconds and we're getting 3x more calls from Google. The SEO work he did has been incredible!",
    author: "Ahmed Benali",
    role: "Business Owner"
  },
  challenges: [
    "Creating a mobile-first design for local customers",
    "Optimizing for local SEO keywords",
    "Integrating Google Business Profile effectively",
    "Ensuring fast loading times on mobile networks"
  ],
  learnings: [
    "Local SEO is crucial for service-based businesses",
    "Mobile performance directly impacts conversion rates",
    "Google Business Profile integration drives significant traffic",
    "Fast loading times are essential for local search rankings"
  ]
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<CaseStudyData | null>(null);

  useEffect(() => {
    // In a real app, you'd fetch data based on the slug
    setData(caseStudyData);
  }, [params.slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <motion.header 
        className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">Case Study</span>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 sm:px-6 md:px-12 py-12">
        {/* Hero Section */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {data.title}
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <UserIcon className="w-5 h-5 mr-3" />
                  <span><strong>Client:</strong> {data.client}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CalendarIcon className="w-5 h-5 mr-3" />
                  <span><strong>Duration:</strong> {data.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <TargetIcon className="w-5 h-5 mr-3" />
                  <span><strong>Role:</strong> {data.role}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {data.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <Image
                  src={data.screenshots.desktop}
                  alt={`${data.title} - Desktop View`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Overview */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Overview</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Goal</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{data.goal}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Problem</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{data.problem}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{data.solution}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Results</h3>
              <div className="space-y-4">
                {data.results.map((result, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-primary dark:text-primary-light mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Screenshots */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What I Built</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Desktop View</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <Image
                  src={data.screenshots.desktop}
                  alt={`${data.title} - Desktop View`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Mobile View</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <Image
                  src={data.screenshots.mobile}
                  alt={`${data.title} - Mobile View`}
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto max-w-xs mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Analytics Dashboard</h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <Image
                src={data.screenshots.analytics}
                alt={`${data.title} - Analytics Dashboard`}
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Real-time Google Analytics 4 dashboard showing active users, geographic reach, and engagement metrics
            </p>
          </div>
        </motion.section>

        {/* Testimonial */}
        {data.testimonial && (
          <motion.section 
            className="mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-4xl mb-4">"</div>
                <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed">
                  {data.testimonial.text}
                </blockquote>
                <div className="text-lg font-semibold">{data.testimonial.author}</div>
                <div className="text-sm opacity-90">{data.testimonial.role}</div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Challenges & Learnings */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Challenges</h3>
              <ul className="space-y-3">
                {data.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary dark:bg-primary-light rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Learnings</h3>
              <ul className="space-y-3">
                {data.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how I can help you achieve similar results for your business
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Let's work together
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
