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
    <div className="bg-accent rounded-xl p-6 shadow-md border border-border">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Price Predictor</h3>
      <p className="text-gray-600 mb-6">
        Our AI model analyzes market trends to predict future oilseed prices
      </p>
      
      <div className="h-64 flex items-end justify-between pt-8 border-b-2 border-gray-300 pb-4">
        {chartData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${(data.price / 150) * 100}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="flex flex-col items-center flex-1 mx-1"
          >
            <div 
              className="w-full bg-primary rounded-t-lg"
              style={{ height: `${(data.price / 150) * 100}%` }}
            ></div>
            <span className="text-xs mt-2 text-gray-600">{data.month}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6">
        <p className="text-gray-700">
          <span className="font-semibold">Predicted price for next month:</span> ₹155/quintal
        </p>
      </div>
    </div>
  );
};

export default PricePrediction;