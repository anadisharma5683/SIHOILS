'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import theme from '@/constants/theme';

export default function ContractsPage() {
  const router = useRouter();
  const { t } = useLanguage();
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
      className="min-h-screen bg-gradient-to-br from-[#d5f9de] via-[#e0f5e5] to-[#d5f9de] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#374151]">{t('createContract')}</h1>
            <p className="text-[#545e75]">{t('browseContracts')}</p>
          </div>
          <Button
            variant="secondary"
            onClick={() => router.push('/dashboard')}
            className="bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151]"
          >
            {t('backToDashboard')}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-[#8aa399]"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#374151]">{t('availableContracts')}</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder={t('searchContracts')}
                  className="pl-10 pr-4 py-2 border border-[#8aa399] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8aa399]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="secondary" className="flex items-center gap-2 bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151]">
                <Filter size={16} />
                {t('filter')}
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredContracts.map((contract) => (
              <Card key={contract.id} className="p-4 border border-[#8aa399]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#374151]">{contract.buyer}</h3>
                    <p className="text-sm text-[#545e75]">{contract.crop} • {contract.region}</p>
                    <p className="text-lg font-bold text-[#304d6d] mt-2">{contract.rate}</p>
                    <p className="text-sm text-[#545e75]">Duration: {contract.duration}</p>
                  </div>
                  <Button size="sm" className="bg-[#304d6d] hover:bg-[#203d5d]">{t('apply')}</Button>
                </div>
                <div className="mt-3 p-2 bg-[#f0f9f2] rounded text-sm text-[#374151]">
                  <span className="font-medium">{t('aiRecommendation')}:</span> {t('bestForGroundnut')}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}