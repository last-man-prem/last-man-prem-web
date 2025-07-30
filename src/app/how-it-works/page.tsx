'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const HowItWorksPage: FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">

      <div className="container mx-auto px-4 py-24 space-y-8">
        <motion.h1 
          className="text-4xl font-bold text-premier-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h1>

        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <section className="space-y-6">
            <div className="bg-premier-purple/20 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-premier-white">Getting Started</h2>
              <ol className="mt-4 space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="bg-premier-gold text-premier-purple font-bold w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-premier-white">Download Discord</h3>
                    <p className="text-premier-white/80">Available on both Apple App Store and Google Play Store</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="bg-premier-gold text-premier-purple font-bold w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-premier-white">Create Discord Account</h3>
                    <p className="text-premier-white/80">Sign up using your email or phone number</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="bg-premier-gold text-premier-purple font-bold w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-premier-white">Join the Server</h3>
                    <p className="text-premier-white/80">Use our invitation link to join the LMPL Discord server</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="bg-premier-gold text-premier-purple font-bold w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-premier-white">Complete Verification</h3>
                    <p className="text-premier-white/80">Pass the verification check and agree to server rules</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-premier-white">Making Selections</h2>
            <div className="space-y-4">
              <p className="text-premier-white/80">When it&apos;s time to make your weekly selection:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li className="text-premier-white/80">Visit the selections channel in Discord</li>
                <li className="text-premier-white/80">Use the provided format to submit your team</li>
                <li className="text-premier-white/80">Submit at least 24 hours before the first matchday</li>
                <li className="text-premier-white/80">Track your previous selections to avoid picking the same team more than twice</li>
              </ol>
            </div>
          </section>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-premier-white">Scoring System</h2>
            <div className="bg-premier-purple/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-premier-white mb-4">Example Score</h3>
              <div className="space-y-2">
                <p className="text-premier-white/80"><span className="text-premier-gold">Selection:</span> Manchester City</p>
                <p className="text-premier-white/80"><span className="text-premier-gold">Result:</span> Manchester City 3-0 Brentford</p>
                <p className="text-premier-white/80"><span className="text-premier-gold">Points:</span> 5 (3 for win + 1 for clean sheet + 1 for margin {'>'} 3)</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
