'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import theme from '@/constants/theme';

export default function InsightsPage() {
  const router = useRouter();

  // Mock data for market insights
  const marketInsightsData = [
    { crop: 'Soybean', location: 'Indore', rate: 4200, change: '+2.5%' },
    { crop: 'Mustard', location: 'Bhopal', rate: 4500, change: '-1.2%' },
    { crop: 'Groundnut', location: 'Raipur', rate: 4900, change: '+3.1%' },
    { crop: 'Sesame', location: 'Jabalpur', rate: 4400, change: '+1.8%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#d5f9de] via-[#e0f5e5] to-[#d5f9de] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#374151]">Market Insights</h1>
            <p className="text-[#545e75]">Visualize mandi data and real-time selling rates</p>
          </div>
          <Button
            variant="secondary"
            onClick={() => router.push('/dashboard')}
            className="bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151]"
          >
            Back to Dashboard
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-[#8aa399]"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#374151]">Live Market Rates</h2>
            <Button variant="secondary" className="flex items-center gap-2 bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151]">
              <MapPin size={16} />
              View Map
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#8aa399] rounded-lg">
              <thead>
                <tr className="bg-[#f0f9f2]">
                  <th className="py-3 px-4 text-left text-[#374151] font-semibold">Crop</th>
                  <th className="py-3 px-4 text-left text-[#374151] font-semibold">Location</th>
                  <th className="py-3 px-4 text-left text-[#374151] font-semibold">Current Rate (₹/quintal)</th>
                  <th className="py-3 px-4 text-left text-[#374151] font-semibold">Change</th>
                </tr>
              </thead>
              <tbody>
                {marketInsightsData.map((item, index) => (
                  <tr key={index} className="border-b border-[#e5e7eb] hover:bg-[#f0f9f2]">
                    <td className="py-3 px-4 text-[#374151]">{item.crop}</td>
                    <td className="py-3 px-4 text-[#545e75]">{item.location}</td>
                    <td className="py-3 px-4 text-[#374151] font-medium">{item.rate}</td>
                    <td className={`py-3 px-4 font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-[#fcb1a6]'}`}>
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketInsightsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#8aa399" />
                <XAxis dataKey="crop" stroke="#545e75" />
                <YAxis stroke="#545e75" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #8aa399', 
                    borderRadius: '8px' 
                  }} 
                />
                <Bar dataKey="rate" fill="#304d6d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}