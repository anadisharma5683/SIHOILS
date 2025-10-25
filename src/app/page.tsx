'use client';

import { heroData, featuresData } from '@/constants/dummyData';
import Button from './common/Button';
import Card from './common/Card';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';
import ImageOptimized from '@/components/ImageOptimized';

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-gradient-to-br from-softBG via-neutral to-softBG text-center">
        {/* 🌅 HERO SECTION */}
        <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
          {/* Faint diagonal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

          <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center space-y-6 sm:space-y-8">
            {/* 🔄 Animated Hero Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 flex items-center justify-center"
            >
              {/* Soft glowing aura */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 204, 150, 0.3)',
                    '0 0 40px rgba(255, 204, 150, 0.6)',
                    '0 0 20px rgba(255, 204, 150, 0.3)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 blur-xl"
              />
              {/* Rotating gradient ring */}
              <div className="bg-gradient-to-br from-accent to-primary rounded-full p-1 sm:p-2 w-full h-full flex items-center justify-center shadow-xl shadow-accent/20 overflow-hidden animate-spin-slow">
                <ImageOptimized
                  src="/images/hero.png"
                  alt="Krishi Shield - Protecting Farmers"
                  width={208}
                  height={208}
                  className="rounded-full object-cover w-full h-full aspect-square"
                />
              </div>
            </motion.div>

            {/* 🧭 Hero Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-6 max-w-2xl"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight drop-shadow-sm"
              >
                {heroData.title}
              </motion.h1>

              <p className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed">
                {heroData.subtitle}
              </p>

              <p className="text-sm sm:text-base text-textSecondary leading-relaxed max-w-xl mx-auto">
                {heroData.description}
              </p>

              {/* ✋ CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/features" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto text-base py-3 px-6 h-12 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                    {heroData.ctaText}
                  </Button>
                </Link>
                <Link href="/dashboard" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto text-base py-3 px-6 h-12 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🛡️ FEATURES SECTION */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-secondary/10 via-accent/5 to-secondary/10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
                How Krishi Shield Protects You
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl mx-auto">
                Our platform provides essential tools to help oilseed farmers manage price volatility.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <Card
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🌻 FINAL CTA SECTION */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
                Ready to Protect Your Harvest?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
                Join thousands of farmers already using Krishi Shield to safeguard their income.
              </p>
              <div className="pt-2">
                <Link href="/dashboard" className="inline-block w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto text-base py-3 px-6 h-12 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}
