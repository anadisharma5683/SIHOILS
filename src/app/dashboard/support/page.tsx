'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Camera, MessageCircle } from 'lucide-react';

export default function SupportPage() {
  const router = useRouter();
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
      className="min-h-screen bg-gradient-to-br from-[#fff5f3] via-[#fef3f2] to-[#ffeae2] p-6 md:p-10"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Support</h1>
            <p className="text-gray-600">Get help and assistance for your farming needs</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <MessageCircle className="text-[#e5989b]" /> Contact Support
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-[#fcd5ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fec5bb]"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-[#fcd5ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fec5bb]"
                    placeholder="Your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-[#fcd5ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fec5bb]"
                    placeholder="Describe your issue or query"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#fec5bb] hover:bg-[#fcb5aa] text-gray-800">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Support</h2>
              <div className="space-y-4">
                <Button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <Phone size={16} />
                  Connect via WhatsApp
                </Button>
                <Button className="w-full flex items-center justify-center gap-2 bg-[#BB001B] hover:bg-[#8B0000] text-white">
                  <Mail size={16} />
                  Email Support
                </Button>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-800 mb-3">Report Crop Issues</h3>
                  <div className="border-2 border-dashed border-[#fcd5ce] rounded-lg p-6 text-center">
                    <Camera className="mx-auto text-gray-400" size={32} />
                    <p className="text-gray-600 mt-2">Upload image or video of crop issues</p>
                    <Button variant="secondary" className="mt-3">
                      Choose File
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">Supports JPG, PNG, MP4 (max 10MB)</p>
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