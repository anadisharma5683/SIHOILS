'use client';

import { useState } from 'react';
import { learningData } from '@/constants/dummyData';
import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

export default function LearnPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-softBG py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle 
          title="Learning Hub" 
          subtitle="Understanding hedging, forward contracts, and blockchain for farmers"
        />
        
        <div className="space-y-4">
          {learningData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-accent rounded-xl shadow-md border border-border overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <span className="text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600">{item.content}</p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Helps manage price risk in agricultural markets</li>
                      <li>Creates predictable income streams</li>
                      <li>Reduces dependency on uncertain market conditions</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl p-6 shadow-md border border-border"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Infographic: How Hedging Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-6 md:mb-0 text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Assess Risk</h4>
              <p className="text-gray-600">Identify price risks for your crop</p>
            </div>
            
            <div className="md:w-1/3 mb-6 md:mb-0 text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Create Contract</h4>
              <p className="text-gray-600">Lock in prices with forward contracts</p>
            </div>
            
            <div className="md:w-1/3 text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Secure Income</h4>
              <p className="text-gray-600">Protect your harvest value</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}