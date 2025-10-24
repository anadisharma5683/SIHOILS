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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="Learning Hub" 
            subtitle="Understanding hedging, forward contracts, and blockchain for farmers"
          />
        </motion.div>
        
        <div className="space-y-4">
          {learningData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-neutral rounded-xl shadow-lg border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
                whileHover={{ 
                  backgroundColor: "#f5f5f5",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-gray-800"
                  animate={{ 
                    color: openIndex === index ? "#4caf50" : "#333"
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.span 
                  className="text-2xl"
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </motion.button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.content}
                  </motion.p>
                  
                  <motion.div 
                    className="mt-4 pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.h4 
                      className="font-semibold text-gray-700 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Key Points:
                    </motion.h4>
                    <motion.ul 
                      className="list-disc pl-5 space-y-1 text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Helps manage price risk in agricultural markets
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        Creates predictable income streams
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        Reduces dependency on uncertain market conditions
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 bg-white rounded-xl p-6 shadow-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Infographic: How Hedging Works
          </motion.h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/3 mb-6 md:mb-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#2e7d32",
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-2xl text-white">1</span>
              </motion.div>
              <motion.h4 
                className="font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Assess Risk
              </motion.h4>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Identify price risks for your crop
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/3 mb-6 md:mb-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#2e7d32",
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-2xl text-white">2</span>
              </motion.div>
              <motion.h4 
                className="font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Create Contract
              </motion.h4>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Lock in prices with forward contracts
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/3 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#2e7d32",
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-2xl text-white">3</span>
              </motion.div>
              <motion.h4 
                className="font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Secure Income
              </motion.h4>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Protect your harvest value
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}