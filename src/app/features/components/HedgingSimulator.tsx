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
    <div className="bg-accent rounded-xl p-6 shadow-md border border-border">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Virtual Hedging Simulator</h3>
      <p className="text-gray-600 mb-6">
        Simulate how hedging can protect you from price drops
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-border">
          <h4 className="font-semibold text-gray-700 mb-2">Current Market Price</h4>
          <p className="text-2xl font-bold text-primary">₹{currentPrice}/quintal</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-border">
          <h4 className="font-semibold text-gray-700 mb-2">Contract Price</h4>
          <p className="text-2xl font-bold text-secondary">₹{contractPrice}/quintal</p>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700">Hedging Status</span>
          <span className={`font-semibold ${isHedged ? 'text-green-600' : 'text-red-600'}`}>
            {isHedged ? 'Active' : 'Inactive'}
          </span>
        </div>
        
        <div 
          className="w-full h-3 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleToggleHedge}
        >
          <motion.div 
            className={`h-full rounded-full ${isHedged ? 'bg-green-500' : 'bg-red-500'}`}
            animate={{ width: isHedged ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-border">
        <h4 className="font-semibold text-gray-700 mb-2">Simulation Results</h4>
        {isHedged ? (
          <p className="text-gray-600">
            With hedging, you're protected at ₹{contractPrice}/quintal regardless of market drops.
            Potential savings: ₹{contractPrice - currentPrice}/quintal
          </p>
        ) : (
          <p className="text-gray-600">
            Without hedging, you're exposed to market fluctuations. 
            Enable hedging to protect your income.
          </p>
        )}
      </div>
    </div>
  );
};

export default HedgingSimulator;