'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
      className="min-h-screen bg-gradient-to-br from-[#fff5f3] via-[#fef3f2] to-[#ffeae2] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Market Insights</h1>
            <p className="text-gray-600">Visualize mandi data and real-time selling rates</p>
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
            <h2 className="text-xl font-semibold text-gray-800">Live Market Rates</h2>
            <Button variant="secondary" className="flex items-center gap-2">
              <MapPin size={16} />
              View Map
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#fcd5ce] rounded-lg">
              <thead>
                <tr className="bg-[#fff5f3]">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Crop</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Location</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Current Rate (₹/quintal)</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Change</th>
                </tr>
              </thead>
              <tbody>
                {marketInsightsData.map((item, index) => (
                  <tr key={index} className="border-b border-[#fae1dd] hover:bg-[#fff9f8]">
                    <td className="py-3 px-4 text-gray-800">{item.crop}</td>
                    <td className="py-3 px-4 text-gray-600">{item.location}</td>
                    <td className="py-3 px-4 text-gray-800 font-medium">{item.rate}</td>
                    <td className={`py-3 px-4 font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
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
                <CartesianGrid strokeDasharray="3 3" stroke="#fcd5ce" />
                <XAxis dataKey="crop" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #fcd5ce', 
                    borderRadius: '8px' 
                  }} 
                />
                <Bar dataKey="rate" fill="#e5989b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}