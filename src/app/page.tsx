'use client';

import { heroData, featuresData } from '@/constants/dummyData';
import Button from './common/Button';
import Card from './common/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '@/styles/animations.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-softBG">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                {heroData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {heroData.subtitle}
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                {heroData.description}
              </p>
              <Link href="/features">
                <Button>{heroData.ctaText}</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="bg-accent rounded-full p-8 w-80 h-80 flex items-center justify-center">
                <img 
                  src="/images/hero.png" 
                  alt="Krishi Shield" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Krishi Shield Protects You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides essential tools to help oilseed farmers manage price volatility
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Protect Your Harvest?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who are already using Krishi Shield to safeguard their income
            </p>
            <Link href="/features">
              <Button variant="secondary">Explore Our Tools</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}