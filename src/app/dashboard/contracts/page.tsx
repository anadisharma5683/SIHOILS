'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';

export default function ContractsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for contracts
  const contractData = [
    { id: 1, buyer: 'AgroFoods Ltd', crop: 'Soybean', rate: '₹4200/quintal', duration: '6 months', region: 'MP' },
    { id: 2, buyer: 'OilCorp Industries', crop: 'Mustard', rate: '₹4500/quintal', duration: '4 months', region: 'Rajasthan' },
    { id: 3, buyer: 'NutriFarms', crop: 'Groundnut', rate: '₹4900/quintal', duration: '5 months', region: 'Gujarat' },
    { id: 4, buyer: 'SeedsGlobal', crop: 'Sesame', rate: '₹4400/quintal', duration: '3 months', region: 'Maharashtra' },
  ];

  const filteredContracts = contractData.filter(contract => 
    contract.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#fff5f3] via-[#fef3f2] to-[#ffeae2] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Create Contract</h1>
            <p className="text-gray-600">Browse and apply for buyback or procurement contracts</p>
          </div>
          <Button
            variant="secondary"
            onClick={() => router.push('/dashboard')}
          >
            Back to Dashboard
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-[#fcd5ce]"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Available Contracts</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search contracts..."
                  className="pl-10 pr-4 py-2 border border-[#fcd5ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fec5bb]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="secondary" className="flex items-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredContracts.map((contract) => (
              <Card key={contract.id} className="p-4 border border-[#fcd5ce]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{contract.buyer}</h3>
                    <p className="text-sm text-gray-600">{contract.crop} • {contract.region}</p>
                    <p className="text-lg font-bold text-[#e5989b] mt-2">{contract.rate}</p>
                    <p className="text-sm text-gray-600">Duration: {contract.duration}</p>
                  </div>
                  <Button size="sm">Apply</Button>
                </div>
                <div className="mt-3 p-2 bg-[#fff5f3] rounded text-sm text-gray-700">
                  <span className="font-medium">AI Recommendation:</span> Best for your current groundnut crop
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}