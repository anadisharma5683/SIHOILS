'use client';

import { heroData, featuresData } from '@/constants/dummyData';
import Button from './common/Button';
import Card from './common/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mobile-First Home Page Design
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softBG via-neutral to-softBG">
      {/* Mobile-First Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Hero Image - Mobile First */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 120
              }}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-accent to-primary rounded-full p-4 sm:p-6 w-full h-full flex items-center justify-center shadow-xl shadow-accent/20">
                <motion.img
                  src="/images/hero.png"
                  alt="Krishi Shield - Protecting Farmers"
                  className="rounded-full w-full h-full object-cover"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 max-w-2xl"
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {heroData.title}
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {heroData.subtitle}
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-textSecondary leading-relaxed max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {heroData.description}
              </motion.p>

              {/* Mobile-Optimized CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/features" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto text-base py-3 px-6 h-12">
                    {heroData.ctaText}
                  </Button>
                </Link>
                <Link href="/dashboard" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto text-base py-3 px-6 h-12">
                    Go to Dashboard
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile-First Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-secondary/10 via-accent/5 to-secondary/10 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-3 md:mb-4 leading-tight">
              How Krishi Shield Protects You
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
              Our platform provides essential tools to help oilseed farmers manage price volatility
            </p>
          </motion.div>

          {/* Mobile-First Card Grid */}
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

      {/* Mobile-First CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Ready to Protect Your Harvest?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Join thousands of farmers who are already using Krishi Shield to safeguard their income
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-2"
            >
              <Link href="/dashboard" className="inline-block w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto text-base py-3 px-6 h-12">
                  Go to Dashboard
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
