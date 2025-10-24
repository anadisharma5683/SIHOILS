'use client';

import { contactData } from '@/constants/dummyData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-softBG py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle 
          title={contactData.title} 
          subtitle={contactData.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-accent rounded-xl p-6 shadow-md border border-border mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">{contactData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">{contactData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office</h4>
                    <p className="text-gray-600">Agricultural Technology Park<br />Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-border"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-lg">f</span>
                </div>
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-lg">t</span>
                </div>
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-lg">in</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md border border-border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}