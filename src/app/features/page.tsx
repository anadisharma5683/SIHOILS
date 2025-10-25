'use client';

import SectionTitle from '../common/SectionTitle';
import PricePrediction from './components/PricePrediction';
import HedgingSimulator from './components/HedgingSimulator';
import EContractsDemo from './components/EContractsDemo';
import MarketAlerts from './components/MarketAlerts';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FeaturesPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-softBG py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title={t('platformFeatures')} 
            subtitle={t('featuresSubtitle')}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PricePrediction />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <HedgingSimulator />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <EContractsDemo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MarketAlerts />
          </motion.div>
        </div>
      </div>
    </div>
  );
}