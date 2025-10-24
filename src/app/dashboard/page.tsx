'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bell,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Wallet,
  FileText,
  LineChart,
  MessageCircle,
  Clock,
  Star,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const u = localStorage.getItem('user');
    if (u) setUser(JSON.parse(u));
    else router.push('/login');
    setLoading(false);
  }, [router]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading your Krishi Shield Dashboard...
      </div>
    );

  if (!user) return null;

  // Stats data
  const stats =
    user.role === 'admin'
      ? [
          {
            title: 'Total Farmers',
            value: '1,240',
            icon: <ShieldCheck className="text-[#e5989b]" />,
          },
          {
            title: 'Active Contracts',
            value: '856',
            icon: <FileText className="text-[#e5989b]" />,
          },
          {
            title: 'Total Volume',
            value: '₹2.4 Cr',
            icon: <TrendingUp className="text-[#e5989b]" />,
          },
        ]
      : [
          {
            title: 'Active Contracts',
            value: '3',
            icon: <ShieldCheck className="text-[#e5989b]" />,
          },
          {
            title: 'Total Savings',
            value: '₹12,500',
            icon: <Wallet className="text-[#e5989b]" />,
          },
          {
            title: 'Next Payment',
            value: '15 days',
            icon: <Clock className="text-[#e5989b]" />,
          },
        ];

  // Alerts mock
  const alerts = [
    {
      id: 1,
      icon: '⭐',
      title: 'Sesame prices expected to rise 5%',
      desc: 'Ideal time to hedge your next batch.',
      time: '2h ago',
    },
    {
      id: 2,
      icon: '🔻',
      title: 'Groundnut prices slightly dropped',
      desc: 'Check your contract protection status.',
      time: '1d ago',
    },
    {
      id: 3,
      icon: '📰',
      title: 'New weather advisory released',
      desc: 'Monsoon forecast updated for your region.',
      time: '3d ago',
    },
  ];

  // Recent Activity mock
  const activities = [
    {
      icon: '📝',
      title: 'New Contract Created',
      desc: 'Groundnut contract #GS2023 for 10 quintals',
      time: '2 hours ago',
    },
    {
      icon: '💰',
      title: 'Payment Received',
      desc: '₹1,250 credited to your account',
      time: '1 day ago',
    },
    {
      icon: '📊',
      title: 'Market Alert',
      desc: 'Sesame prices expected to rise 5%',
      time: '2 days ago',
    },
  ];

  // Upcoming Contracts mock
  const contracts = [
    {
      name: 'Groundnut #GS2023',
      due: '15 days',
      qty: '10 quintals @ ₹145/q',
    },
    {
      name: 'Sesame #SS2023',
      due: '32 days',
      qty: '5 quintals @ ₹160/q',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#fff5f3] via-[#fef3f2] to-[#ffeae2] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, {user?.name}
            </h1>
            <p className="text-gray-600">
              {user?.role === 'admin'
                ? 'Admin Console — Manage Krishi Shield Platform'
                : 'Your Farming Insights & Protection'}
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              localStorage.removeItem('user');
              router.push('/login');
            }}
          >
            Logout
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-md border border-[#fcd5ce] shadow-sm hover:shadow-md transition rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  {s.icon}
                  <h4 className="font-medium text-gray-700">{s.title}</h4>
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  {s.value}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Alerts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 p-6 rounded-2xl shadow-md border border-[#fae1dd]"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Bell className="text-[#e5989b]" /> Market Alerts
            </h2>
            <Button
              variant="secondary"
              onClick={() => router.push('/dashboard/alerts')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {alerts.map((a) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#fff4f1] transition"
              >
                <div className="text-xl">{a.icon}</div>
                <div>
                  <p className="font-medium text-gray-800">{a.title}</p>
                  <p className="text-gray-600 text-sm">{a.desc}</p>
                  <p className="text-xs text-gray-400 mt-1">{a.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loans & Bima Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden bg-gradient-to-r from-[#fec5bb] to-[#fcd5ce] p-8 rounded-2xl shadow-lg border border-[#fec5bb]"
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
              <Sparkles className="mr-2 text-yellow-500" /> Loans & Bima (ऋण और
              बीमा)
            </h2>
            <p className="text-gray-700 mb-6">
              Secure your crops with easy loans and insurance coverage.
              <span className="block text-sm text-gray-600 mt-1">
                ऋण सुविधाएँ और फसल बीमा सेवाएँ अब एक ही जगह।
              </span>
            </p>
            <Button
              className="bg-white text-gray-800 hover:bg-[#fff0ec]"
              onClick={() => router.push('/dashboard/loans-bima')}
            >
              Access Services
            </Button>
          </div>
        </motion.div>

        {/* Activity Hub */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-[#fcd5ce]"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <LineChart className="text-[#e5989b]" /> Recent Activity
            </h3>
            <div className="space-y-4">
              {activities.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#fff7f5] transition"
                >
                  <div className="bg-[#fcd5ce] w-10 h-10 rounded-full flex items-center justify-center text-lg">
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{act.title}</h4>
                    <p className="text-gray-600 text-sm">{act.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">{act.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions + Upcoming Contracts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-[#fcd5ce]"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <HeartHandshake className="text-[#e5989b]" /> Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button className="w-full flex items-center justify-center gap-2">
                <FileText size={16} /> Create Contract
              </Button>
              <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                <LineChart size={16} /> View Reports
              </Button>
              <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                <TrendingUp size={16} /> Market Insights
              </Button>
              <Button className="w-full flex items-center justify-center gap-2">
                <MessageCircle size={16} /> Support
              </Button>
            </div>

            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="text-[#e5989b]" /> Upcoming Contracts
            </h4>
            <div className="space-y-3">
              {contracts.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-[#fcd5ce]/40 rounded-xl flex justify-between items-center hover:bg-[#ffe5d9] transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">{c.name}</p>
                    <p className="text-sm text-gray-600">{c.qty}</p>
                  </div>
                  <div className="text-sm text-gray-700 font-medium flex items-center gap-1">
                    {c.due} <ChevronRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
