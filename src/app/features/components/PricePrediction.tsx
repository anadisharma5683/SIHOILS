'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import heavy charting library to reduce initial bundle size
const ResponsiveContainer = dynamic(
  () => import('recharts').then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

const LineChart = dynamic(
  () => import('recharts').then((mod) => mod.LineChart),
  { ssr: false }
);

const Line = dynamic(
  () => import('recharts').then((mod) => mod.Line),
  { ssr: false }
);

const XAxis = dynamic(
  () => import('recharts').then((mod) => mod.XAxis),
  { ssr: false }
);

const YAxis = dynamic(
  () => import('recharts').then((mod) => mod.YAxis),
  { ssr: false }
);

const CartesianGrid = dynamic(
  () => import('recharts').then((mod) => mod.CartesianGrid),
  { ssr: false }
);

const Tooltip = dynamic(
  () => import('recharts').then((mod) => mod.Tooltip),
  { ssr: false }
);

const PricePrediction = () => {
  const chartData = [
    { month: 'Jan', price: 120 },
    { month: 'Feb', price: 130 },
    { month: 'Mar', price: 125 },
    { month: 'Apr', price: 140 },
    { month: 'May', price: 135 },
    { month: 'Jun', price: 150 },
  ];

  return (
    <div className="bg-neutral rounded-xl p-6 shadow-lg border border-border">
      <motion.h3
        className="text-xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        AI Price Predictor
      </motion.h3>

      <motion.p
        className="text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Our AI model analyzes market trends to predict future oilseed prices.
      </motion.p>

      {/* Line Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5, fill: '#16a34a' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-gray-700">
          <span className="font-semibold">Predicted price for next month:</span>{' '}
          ₹155/quintal
        </p>
      </motion.div>
    </div>
  );
};

export default PricePrediction;