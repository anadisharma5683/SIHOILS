'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bell, ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AlertsPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock alerts data - expanded for the alerts page
  const allAlerts = [
    {
      id: 1,
      icon: '⭐',
      title: 'Sesame prices expected to rise 5%',
      desc: 'Ideal time to hedge your next batch. Market analysis shows strong demand from export markets.',
      time: '2 hours ago',
      type: 'price',
      priority: 'high',
    },
    {
      id: 2,
      icon: '🔻',
      title: 'Groundnut prices slightly dropped',
      desc: 'Check your contract protection status. Current market volatility may affect your positions.',
      time: '1 day ago',
      type: 'price',
      priority: 'medium',
    },
    {
      id: 3,
      icon: '📰',
      title: 'New weather advisory released',
      desc: 'Monsoon forecast updated for your region. Heavy rainfall expected in next 48 hours.',
      time: '3 days ago',
      type: 'weather',
      priority: 'high',
    },
    {
      id: 4,
      icon: '📈',
      title: 'Mustard seed demand surge',
      desc: 'Industrial demand pushing prices up. Consider adjusting your hedging strategy.',
      time: '5 hours ago',
      type: 'market',
      priority: 'medium',
    },
    {
      id: 5,
      icon: '⚠️',
      title: 'Contract expiry reminder',
      desc: 'Your groundnut contract #GS2023 expires in 7 days. Consider renewal options.',
      time: '1 day ago',
      type: 'contract',
      priority: 'high',
    },
    {
      id: 6,
      icon: '🌱',
      title: 'New crop disease alert',
      desc: 'Whitefly infestation reported in nearby regions. Monitor your crops closely.',
      time: '2 days ago',
      type: 'disease',
      priority: 'high',
    },
    {
      id: 7,
      icon: '💰',
      title: 'Government subsidy available',
      desc: 'New PM-KISAN installment released. Check eligibility and claim your benefits.',
      time: '3 days ago',
      type: 'subsidy',
      priority: 'medium',
    },
    {
      id: 8,
      icon: '📊',
      title: 'Monthly market report available',
      desc: 'Comprehensive analysis of oilseed market trends for September 2024.',
      time: '1 week ago',
      type: 'report',
      priority: 'low',
    },
  ];

  const filteredAlerts = allAlerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || alert.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#d5f9de] via-[#e0f5e5] to-[#d5f9de] p-4 md:p-6 lg:p-10"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              onClick={() => router.push('/dashboard')}
              className="bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151] p-2"
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#374151] flex items-center gap-2">
                <Bell className="text-[#304d6d]" size={24} />
                {t('marketAlerts')}
              </h1>
              <p className="text-[#545e75] text-sm md:text-base">
                {t('marketAlertsDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-[#8aa399]">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder={t('searchAlerts')}
                className="w-full pl-10 pr-4 py-2 border border-[#8aa399] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8aa399]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-[#8aa399] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8aa399] bg-white"
              >
                <option value="all">{t('allAlerts')}</option>
                <option value="price">{t('priceAlerts')}</option>
                <option value="weather">{t('weatherAlerts')}</option>
                <option value="market">{t('marketAlerts')}</option>
                <option value="contract">{t('contractAlerts')}</option>
                <option value="disease">{t('diseaseAlerts')}</option>
                <option value="subsidy">{t('subsidyAlerts')}</option>
                <option value="report">{t('reportAlerts')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl shadow-md border border-[#8aa399] text-center">
              <Bell className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-[#374151] mb-2">{t('noAlerts')}</h3>
              <p className="text-[#545e75]">{t('noAlertsDesc')}</p>
            </div>
          ) : (
            filteredAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-4 rounded-2xl shadow-md border-l-4 ${getPriorityColor(alert.priority)} border border-[#8aa399] hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{alert.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <h3 className="font-semibold text-[#374151] text-base md:text-lg">{alert.title}</h3>
                      <span className="text-xs text-gray-400 flex-shrink-0">{alert.time}</span>
                    </div>
                    <p className="text-[#545e75] text-sm md:text-base mt-1">{alert.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                        alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {alert.priority === 'high' ? t('highPriority') :
                         alert.priority === 'medium' ? t('mediumPriority') :
                         t('lowPriority')}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                        {alert.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Load More Button */}
        {filteredAlerts.length > 0 && (
          <div className="text-center">
            <Button
              variant="secondary"
              className="bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151]"
            >
              {t('loadMoreAlerts')}
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
