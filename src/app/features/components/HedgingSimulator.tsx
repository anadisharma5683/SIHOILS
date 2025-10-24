'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const HedgingSimulator = () => {
  const [isHedged, setIsHedged] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(140);
  const [contractPrice, setContractPrice] = useState(145);
  
  const handleToggleHedge = () => {
    setIsHedged(!isHedged);
  };

  return (
    <div className="bg-neutral rounded-xl p-6 shadow-lg border border-border">
      <motion.h3 
        className="text-xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Virtual Hedging Simulator
      </motion.h3>
      <motion.p 
        className="text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Simulate how hedging can protect you from price drops
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          className="bg-white p-4 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <h4 className="font-semibold text-gray-700 mb-2">Current Market Price</h4>
          <p className="text-2xl font-bold text-primary">₹{currentPrice}/quintal</p>
        </motion.div>
        
        <motion.div
          className="bg-white p-4 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <h4 className="font-semibold text-gray-700 mb-2">Contract Price</h4>
          <p className="text-2xl font-bold text-secondary">₹{contractPrice}/quintal</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700">Hedging Status</span>
          <motion.span 
            className={`font-semibold ${isHedged ? 'text-green-600' : 'text-red-600'}`}
            animate={{ 
              scale: isHedged ? [1, 1.1, 1] : 1,
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300
            }}
          >
            {isHedged ? 'Active' : 'Inactive'}
          </motion.span>
        </div>
        
        <div 
          className="w-full h-3 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
          onClick={handleToggleHedge}
        >
          <motion.div 
            className={`h-full rounded-full ${isHedged ? 'bg-green-500' : 'bg-red-500'}`}
            animate={{ width: isHedged ? '100%' : '0%' }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              originX: 0
            }}
          />
        </div>
      </motion.div>
      
      <motion.div
        className="bg-white p-4 rounded-lg border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <h4 className="font-semibold text-gray-700 mb-2">Simulation Results</h4>
        {isHedged ? (
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            With hedging, you're protected at ₹{contractPrice}/quintal regardless of market drops.
            Potential savings: ₹{contractPrice - currentPrice}/quintal
          </motion.p>
        ) : (
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Without hedging, you're exposed to market fluctuations. 
            Enable hedging to protect your income.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default HedgingSimulator;