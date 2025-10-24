'use client';

import SectionTitle from '../common/SectionTitle';
import PricePrediction from './components/PricePrediction';
import HedgingSimulator from './components/HedgingSimulator';
import EContractsDemo from './components/EContractsDemo';
import MarketAlerts from './components/MarketAlerts';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-softBG py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          title="Platform Features" 
          subtitle="Explore the tools that help protect your income from price volatility"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <PricePrediction />
          <HedgingSimulator />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EContractsDemo />
          <MarketAlerts />
        </div>
      </div>
    </div>
  );
}