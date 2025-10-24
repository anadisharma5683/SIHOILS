'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const PricePrediction = () => {
  // Mock data for price prediction chart
  const chartData = [
    { month: 'Jan', price: 120 },
    { month: 'Feb', price: 130 },
    { month: 'Mar', price: 125 },
    { month: 'Apr', price: 140 },
    { month: 'May', price: 135 },
    { month: 'Jun', price: 150 },
  ];

  return (
    <div className="bg-neutral rounded-xl p-6 shadow-lg border border-border">
      <motion.h3 
        className="text-xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        AI Price Predictor
      </motion.h3>
      <motion.p 
        className="text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Our AI model analyzes market trends to predict future oilseed prices
      </motion.p>
      
      <div className="h-64 flex items-end justify-between pt-8 border-b-2 border-border pb-4">
        {chartData.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center flex-1 mx-1"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="w-full bg-primary rounded-t-lg"
              initial={{ height: 0 }}
              animate={{ height: `${(data.price / 150) * 100}%` }}
              transition={{ 
                duration: 1, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                backgroundColor: "#2e7d32",
                transition: { duration: 0.2 }
              }}
            />
            <motion.span 
              className="text-xs mt-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {data.month}
            </motion.span>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-gray-700">
          <span className="font-semibold">Predicted price for next month:</span> ₹155/quintal
        </p>
      </motion.div>
    </div>
  );
};

export default PricePrediction;