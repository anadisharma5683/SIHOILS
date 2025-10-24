'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, LineChart } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ReportsPage() {
  const router = useRouter();

  // Mock data for price trends
  const priceTrendData = [
    { name: 'Jan', sesame: 4000, soybean: 3800, mustard: 4200, groundnut: 4500 },
    { name: 'Feb', sesame: 4100, soybean: 3900, mustard: 4100, groundnut: 4600 },
    { name: 'Mar', sesame: 4050, soybean: 3850, mustard: 4150, groundnut: 4550 },
    { name: 'Apr', sesame: 4200, soybean: 4000, mustard: 4300, groundnut: 4700 },
    { name: 'May', sesame: 4300, soybean: 4100, mustard: 4400, groundnut: 4800 },
    { name: 'Jun', sesame: 4400, soybean: 4200, mustard: 4500, groundnut: 4900 },
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
            <h1 className="text-3xl font-bold text-gray-800">View Reports</h1>
            <p className="text-gray-600">Analyze current and projected prices of different oilseeds</p>
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
            <h2 className="text-xl font-semibold text-gray-800">Oilseed Price Trends</h2>
            <div className="flex gap-2">
              <Button variant="secondary" className="flex items-center gap-2">
                <Download size={16} />
                PDF
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <Download size={16} />
                CSV
              </Button>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={priceTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fcd5ce" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #fcd5ce', 
                    borderRadius: '8px' 
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="sesame" 
                  stroke="#e5989b" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="soybean" 
                  stroke="#fcd5ce" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="mustard" 
                  stroke="#fec5bb" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="groundnut" 
                  stroke="#fae1dd" 
                  strokeWidth={2}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-[#fff5f3] p-4 rounded-lg mt-6">
            <p className="text-gray-800">
              <span className="font-semibold">Mustard likely to rise 4% next week</span> - 
              Strong export demand from European markets driving prices up.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}