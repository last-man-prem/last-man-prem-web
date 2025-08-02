'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HowItWorksPage: FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Background Image */}
      <motion.div 
        className="fixed inset-0 opacity-25 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/backgrounds/rulespage/premleague1.webp"
          alt=""
          fill
          className="object-cover object-center blur-[1px]"
          priority
          sizes="100vw"
        />
      </motion.div>

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
              <h3 className="text-xl font-semibold text-premier-white mb-4">Points Breakdown</h3>
              <ul className="list-disc pl-5 space-y-2 text-premier-white/80">
                <li>Win = 3 points</li>
                <li>Draw = 1 point</li>
                <li>Clean Sheet = Bonus 1 point</li>
                <li>Winning Margin {'>'} 3 = Bonus 1 point</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-premier-white/10">
                <h4 className="text-lg font-semibold text-premier-white mb-2">Example:</h4>
                <div className="space-y-2">
                  <p className="text-premier-white/80"><span className="text-premier-gold">Selection:</span> Manchester City</p>
                  <p className="text-premier-white/80"><span className="text-premier-gold">Result:</span> Manchester City 3-0 Brentford</p>
                  <p className="text-premier-white/80"><span className="text-premier-gold">Points:</span> 5 (3 for win + 1 for clean sheet + 1 for margin {'>'} 3)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-premier-white">League Rules</h2>
            <ul className="list-decimal pl-5 space-y-3 text-premier-white/80">
              <li>All players have the opportunity to pick each team twice throughout the season</li>
              <li>Selections must be in 24 hours before the first matchday kick off</li>
              <li>Late selections will default to the lowest ranking team in the league that week</li>
              <li>Results will be submitted within 24 hours of the final match</li>
              <li>Blank game weeks will be bypassed</li>
              <li>Two consecutive weeks of missed selections will forfeit entry</li>
              <li>Payment must be received before season start</li>
              <li>English Premier League teams only</li>
            </ul>
          </section>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-premier-white">Entry Fees</h2>
            <ul className="list-disc pl-5 space-y-2 text-premier-white/80">
              <li>£20 from start of season</li>
              <li>£5 charge per week missed for new members</li>
            </ul>
          </section>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-premier-white">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-premier-white/90">How will I know if I have already picked a team twice?</h3>
                <p className="mt-2 text-premier-white/80">
                  There will be a document of all selections including how many times each player has selected a team. 
                  If you have selected a team twice already, you will be advised accordingly to re-pick.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-premier-white/90">What happens during a blank/double gameweek?</h3>
                <p className="mt-2 text-premier-white/80">
                  During blank/double gameweeks, players will have the opportunity to vote to play or bypass the round. 
                  The decision will be based on the majority in favour or against.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-premier-white/90">What happens in the event of a points draw?</h3>
                <p className="mt-2 text-premier-white/80">
                  In case of a tie, the winner will be decided by the number of 3-point wins, followed by clean sheets if needed.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
