'use client';

import type { Metadata } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';
import ButtonOld from '../common/Button';
import LoadingSkeleton from '../common/LoadingSkeleton';
import { useAuth } from '@/contexts/AuthContext';

// Removed metadata export since we're in a Client Component

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fff5f3] via-[#fef3f2] to-[#ffeae2] p-6 md:p-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="h-12 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          <LoadingSkeleton type="dashboard" />
        </div>
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
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f3] via-[#fef3f2] to-[#ffeae2] p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Welcome, {user?.name}
            </h1>
            <p className="text-gray-600 mt-1">
              {user?.role === 'admin'
                ? 'Admin Console — Manage Krishi Shield Platform'
                : 'Your Farming Insights & Protection'}
            </p>
          </div>
          <ButtonOld
            variant="secondary"
            onClick={logout}
            className="w-full sm:w-auto"
          >
            Logout
          </ButtonOld>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="opacity-0 animate-fade-in"
              style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s forwards` }}
            >
              <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-md border border-[#fcd5ce] shadow-sm hover:shadow-md transition rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  {s.icon}
                  <h4 className="font-medium text-gray-700 text-sm sm:text-base">{s.title}</h4>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {s.value}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Alerts Section */}
        <div className="bg-white/90 p-4 sm:p-6 rounded-2xl shadow-md border border-[#fae1dd]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Bell className="text-[#e5989b]" /> Market Alerts
            </h2>
            <Button
              variant="secondary"
              onClick={() => router.push('/dashboard/alerts')}
              className="w-full sm:w-auto"
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {alerts.map((a) => (
              <div
                key={a.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#fff4f1] transition"
              >
                <div className="text-xl">{a.icon}</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">{a.title}</p>
                  <p className="text-gray-600 text-sm">{a.desc}</p>
                  <p className="text-xs text-gray-400 mt-1">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loans & Bima Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#fec5bb] to-[#fcd5ce] p-6 rounded-2xl shadow-lg border border-[#fec5bb]">
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center">
              <Sparkles className="mr-2 text-yellow-500" /> Loans & Bima (ऋण और
              बीमा)
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Secure your crops with easy loans and insurance coverage.
              <span className="block text-sm text-gray-600 mt-1">
                ऋण सुविधाएँ और फसल बीमा सेवाएँ अब एक ही जगह।
              </span>
            </p>
            <ButtonOld
              className="bg-white text-gray-800 hover:bg-[#fff0ec] w-full sm:w-auto"
              onClick={() => router.push('/dashboard/loans-bima')}
            >
              Access Services
            </ButtonOld>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-[#fcd5ce]">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
            <HeartHandshake className="text-[#e5989b]" /> Quick Actions
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <ButtonOld 
              className="h-20 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 bg-[#fec5bb] hover:bg-[#fcb5aa] text-gray-800 text-sm"
              onClick={() => router.push('/dashboard/contracts')}
            >
              <FileText size={20} />
              <span className="font-medium">Create Contract</span>
            </ButtonOld>
            <ButtonOld 
              variant="secondary" 
              className="h-20 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 text-sm"
              onClick={() => router.push('/dashboard/reports')}
            >
              <LineChart size={20} />
              <span className="font-medium">View Reports</span>
            </ButtonOld>
            <ButtonOld 
              variant="secondary" 
              className="h-20 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 text-sm"
              onClick={() => router.push('/dashboard/insights')}
            >
              <TrendingUp size={20} />
              <span className="font-medium">Market Insights</span>
            </ButtonOld>
            <ButtonOld 
              className="h-20 sm:h-24 flex flex-col items-center justify-center gap-1 sm:gap-2 bg-[#fcd5ce] hover:bg-[#fbc5c3] text-gray-800 text-sm"
              onClick={() => router.push('/dashboard/support')}
            >
              <MessageCircle size={20} />
              <span className="font-medium">Support</span>
            </ButtonOld>
          </div>
        </div>

        {/* Activity Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-[#fcd5ce]">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <LineChart className="text-[#e5989b]" /> Recent Activity
            </h3>
            <div className="space-y-4">
              {activities.map((act, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#fff7f5] transition"
                >
                  <div className="bg-[#fcd5ce] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base">
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm sm:text-base">{act.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{act.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Contracts */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-[#fcd5ce]">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-lg sm:text-xl">
              <Clock className="text-[#e5989b]" /> Upcoming Contracts
            </h4>
            <div className="space-y-3">
              {contracts.map((c, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 bg-[#fcd5ce]/40 rounded-xl flex justify-between items-center hover:bg-[#ffe5d9] transition"
                >
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">{c.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{c.qty}</p>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium flex items-center gap-1">
                    {c.due} <ChevronRight size={12} className="sm:size-14" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}