'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const EContractsDemo = () => {
  const [activeContract, setActiveContract] = useState(0);
  
  const contracts = [
    {
      id: 1,
      farmer: "Rajesh Kumar",
      crop: "Groundnut",
      quantity: "10 quintals",
      price: "₹145/quintal",
      date: "2023-06-15",
      status: "Active"
    },
    {
      id: 2,
      farmer: "Priya Sharma",
      crop: "Sesame",
      quantity: "5 quintals",
      price: "₹160/quintal",
      date: "2023-07-20",
      status: "Completed"
    },
    {
      id: 3,
      farmer: "Amit Patel",
      crop: "Sunflower",
      quantity: "8 quintals",
      price: "₹150/quintal",
      date: "2023-08-10",
      status: "Pending"
    }
  ];

  return (
    <div className="bg-neutral rounded-xl p-6 shadow-lg border border-border">
      <motion.h3 
        className="text-xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Blockchain E-Contracts
      </motion.h3>
      <motion.p 
        className="text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Transparent and secure digital contracts inspired by blockchain technology
      </motion.p>
      
      <div className="flex overflow-x-auto gap-4 mb-6 pb-2">
        {contracts.map((contract, index) => (
          <motion.div
            key={contract.id}
            className={`flex-shrink-0 w-64 p-4 rounded-lg border cursor-pointer transition-all ${
              activeContract === index 
                ? 'border-primary bg-white shadow-md' 
                : 'border-border bg-white'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveContract(index)}
          >
            <div className="flex justify-between items-start mb-2">
              <motion.h4 
                className="font-semibold text-gray-800"
                animate={{ 
                  color: activeContract === index ? "#4caf50" : "#333"
                }}
              >
                Contract #{contract.id}
              </motion.h4>
              <motion.span className={`px-2 py-1 rounded text-xs ${
                contract.status === 'Active' ? 'bg-green-100 text-green-800' :
                contract.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {contract.status}
              </motion.span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{contract.farmer}</p>
            <p className="text-sm text-gray-600">{contract.crop} - {contract.quantity}</p>
            <motion.p 
              className="font-semibold text-gray-800 mt-2"
              animate={{ 
                color: activeContract === index ? "#2e7d32" : "#333"
              }}
            >
              ₹{contract.price}
            </motion.p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="bg-white p-4 rounded-lg border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <h4 className="font-semibold text-gray-700 mb-3">Contract Details</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Farmer:</span>
            <motion.span 
              className="font-medium"
              key={contracts[activeContract].farmer}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {contracts[activeContract].farmer}
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Crop:</span>
            <motion.span 
              className="font-medium"
              key={contracts[activeContract].crop}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {contracts[activeContract].crop}
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Quantity:</span>
            <motion.span 
              className="font-medium"
              key={contracts[activeContract].quantity}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {contracts[activeContract].quantity}
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price:</span>
            <motion.span 
              className="font-medium"
              key={contracts[activeContract].price}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              ₹{contracts[activeContract].price}
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <motion.span 
              className="font-medium"
              key={contracts[activeContract].date}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {contracts[activeContract].date}
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <motion.span className={`font-medium ${
              contracts[activeContract].status === 'Active' ? 'text-green-600' :
              contracts[activeContract].status === 'Completed' ? 'text-blue-600' :
              'text-yellow-600'
            }`}>
              {contracts[activeContract].status}
            </motion.span>
          </div>
        </div>
        
        <motion.div 
          className="mt-4 pt-4 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Blockchain-inspired feature:</span> Immutable record of contract terms, 
            transparent to all parties, with tamper-proof verification.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EContractsDemo;