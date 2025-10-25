'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Camera, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import theme from '@/constants/theme';

export default function SupportPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent to support team!');
    // Reset form
    setName('');
    setMobile('');
    setMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#d5f9de] via-[#e0f5e5] to-[#d5f9de] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#374151]">{t('support')}</h1>
            <p className="text-[#545e75]">{t('getHelp')}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-[#374151] mb-6 flex items-center gap-2">
                <MessageCircle className="text-[#304d6d]" /> {t('contactSupport')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#374151] mb-2">{t('name')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-[#8aa399] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8aa399]"
                    placeholder={t('yourName')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#374151] mb-2">{t('mobileNumber')}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-[#8aa399] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8aa399]"
                    placeholder={t('yourMobileNumber')}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#374151] mb-2">{t('message')}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-[#8aa399] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8aa399]"
                    placeholder={t('describeIssue')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#304d6d] hover:bg-[#203d5d] text-white">
                  {t('sendMessage')}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-[#374151] mb-6">{t('quickSupport')}</h2>
              <div className="space-y-4">
                <Button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <Phone size={16} />
                  {t('connectWhatsApp')}
                </Button>
                <Button className="w-full flex items-center justify-center gap-2 bg-[#BB001B] hover:bg-[#8B0000] text-white">
                  <Mail size={16} />
                  {t('emailSupport')}
                </Button>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-[#374151] mb-3">{t('reportCropIssues')}</h3>
                  <div className="border-2 border-dashed border-[#8aa399] rounded-lg p-6 text-center">
                    <Camera className="mx-auto text-gray-400" size={32} />
                    <p className="text-[#545e75] mt-2">{t('uploadImageVideo')}</p>
                    <Button variant="secondary" className="mt-3 bg-white hover:bg-[#f0f9f2] border border-[#8aa399] text-[#374151]">
                      {t('chooseFile')}
                    </Button>
                    <p className="text-sm text-[#545e75] mt-2">{t('supportsFormats')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}