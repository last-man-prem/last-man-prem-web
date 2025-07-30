'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const JoinNowPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.h1 
        className="text-4xl font-bold text-premier-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the League
      </motion.h1>

      <motion.div
        className="prose prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <section className="space-y-6">
          <div className="bg-premier-purple/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-premier-white">Entry Requirements</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-premier-gold">✓</span>
                <p>Discord account</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-premier-gold">✓</span>
                <p>Entry fee payment (£20 for full season)</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-premier-gold">✓</span>
                <p>Commitment to weekly selections</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-premier-white mb-6">Join Now in 3 Easy Steps</h2>
          <div className="space-y-8">
            <div className="bg-premier-purple/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-premier-gold">1. Download Discord</h3>
              <div className="mt-4 space-y-4">
                <p>Download the Discord app from:</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://apps.apple.com/us/app/discord/id985746746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
                  >
                    Apple App Store
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
                  >
                    Google Play Store
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-premier-purple/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-premier-gold">2. Join Our Discord Server</h3>
              <p className="mt-2">Click the button below to join our Discord server:</p>
              <a 
                href="https://discord.com/invite/N4wFkPR2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
              >
                Join Discord Server
              </a>
            </div>

            <div className="bg-premier-purple/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-premier-gold">3. Complete Verification</h3>
              <p className="mt-2">Once you&#39;ve joined:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Pass the verification level check</li>
                <li>Read and agree to the server rules</li>
                <li>Wait for acceptance confirmation</li>
              </ul>
            </div>

            <div className="bg-premier-purple/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-premier-gold">4. Pay Entry Fee</h3>
              <div className="mt-4 space-y-4">
                <div className="bg-premier-purple/30 p-4 rounded-lg">
                  <h4 className="text-premier-gold font-semibold mb-2">Season Entry Fee</h4>
                  <p className="text-2xl font-bold">£20</p>
                  <p className="text-sm text-premier-white/80 mt-1">From start of season</p>
                </div>
                <div className="bg-premier-purple/30 p-4 rounded-lg">
                  <h4 className="text-premier-gold font-semibold mb-2">Mid-Season Join Fee</h4>
                  <p className="text-2xl font-bold">£5</p>
                  <p className="text-sm text-premier-white/80 mt-1">Additional charge per missed week</p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-premier-white mb-2">Payment Details:</p>
                  <p className="text-sm text-premier-white/80">Complete payment details will be provided in the Discord server after verification</p>
                  <p className="text-sm text-premier-white/80 mt-2">⚠️ Your selection will be disregarded if payment is not received before the season starts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-premier-gold/10 p-6 rounded-lg border border-premier-gold/20">
            <h2 className="text-2xl font-semibold text-premier-white mb-4">Need More Information?</h2>
            <p className="mb-4">Check out our detailed guides:</p>
            <div className="space-x-4">
              <Link 
                href="/how-it-works"
                className="inline-block px-6 py-3 bg-premier-purple text-premier-white rounded-lg hover:bg-premier-purple/80 transition-colors"
              >
                How It Works
              </Link>
              <Link 
                href="/rules"
                className="inline-block px-6 py-3 bg-premier-purple text-premier-white rounded-lg hover:bg-premier-purple/80 transition-colors"
              >
                League Rules
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default JoinNowPage;
