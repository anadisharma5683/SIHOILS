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
    <div className="bg-accent rounded-xl p-6 shadow-md border border-border">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Blockchain E-Contracts</h3>
      <p className="text-gray-600 mb-6">
        Transparent and secure digital contracts inspired by blockchain technology
      </p>
      
      <div className="flex overflow-x-auto gap-4 mb-6 pb-2">
        {contracts.map((contract, index) => (
          <motion.div
            key={contract.id}
            whileHover={{ y: -5 }}
            onClick={() => setActiveContract(index)}
            className={`flex-shrink-0 w-64 p-4 rounded-lg border cursor-pointer transition-all ${
              activeContract === index 
                ? 'border-primary bg-white shadow-md' 
                : 'border-border bg-white'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-800">Contract #{contract.id}</h4>
              <span className={`px-2 py-1 rounded text-xs ${
                contract.status === 'Active' ? 'bg-green-100 text-green-800' :
                contract.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {contract.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{contract.farmer}</p>
            <p className="text-sm text-gray-600">{contract.crop} - {contract.quantity}</p>
            <p className="font-semibold text-gray-800 mt-2">₹{contract.price}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-border">
        <h4 className="font-semibold text-gray-700 mb-3">Contract Details</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Farmer:</span>
            <span className="font-medium">{contracts[activeContract].farmer}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Crop:</span>
            <span className="font-medium">{contracts[activeContract].crop}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Quantity:</span>
            <span className="font-medium">{contracts[activeContract].quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price:</span>
            <span className="font-medium">₹{contracts[activeContract].price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{contracts[activeContract].date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className={`font-medium ${
              contracts[activeContract].status === 'Active' ? 'text-green-600' :
              contracts[activeContract].status === 'Completed' ? 'text-blue-600' :
              'text-yellow-600'
            }`}>
              {contracts[activeContract].status}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Blockchain-inspired feature:</span> Immutable record of contract terms, 
            transparent to all parties, with tamper-proof verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EContractsDemo;