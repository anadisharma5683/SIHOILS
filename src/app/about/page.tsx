'use client';

import { aboutData } from '@/constants/dummyData';
import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-softBG py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle 
          title="About Krishi Shield" 
          subtitle="Our mission to protect Indian oilseed farmers from price volatility"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-accent rounded-xl p-6 shadow-md border border-border mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">{aboutData.story}</p>
          <p className="text-gray-600">{aboutData.mission}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md border border-border"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">{aboutData.vision}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-md border border-border"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Krishi Shield?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Farmer-first approach to financial tools</li>
              <li>Simplified complex hedging concepts</li>
              <li>Accessible technology for rural communities</li>
              <li>Transparent and trustworthy platform</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md border border-border"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h3>
          <p className="text-gray-600 mb-4">
            We are a diverse team of agricultural experts, financial technologists, and rural development specialists 
            committed to empowering Indian farmers through innovative technology.
          </p>
          <p className="text-gray-600">
            Our platform combines deep domain knowledge with cutting-edge technology to create solutions that truly 
            serve the needs of oilseed farmers across India.
          </p>
        </motion.div>
      </div>
    </div>
  );
}