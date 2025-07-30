'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const RulesPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
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
        <section className="space-y-6 bg-premier-purple/20 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold text-premier-gold">Discord Server Overview</h2>
          <div className="space-y-4">
            <p className="text-premier-white/90">
              The Last Man Premier League is run entirely through our Discord server, providing an interactive and engaging experience for all players.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-premier-purple/30 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-premier-gold mb-3">Game Management</h3>
                <ul className="list-disc pl-4 space-y-2 text-premier-white/80">
                  <li>Weekly team selections</li>
                  <li>Results announcements</li>
                  <li>League table updates</li>
                  <li>Important announcements</li>
                </ul>
              </div>
              
              <div className="bg-premier-purple/30 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-premier-gold mb-3">Community Features</h3>
                <ul className="list-disc pl-4 space-y-2 text-premier-white/80">
                  <li>League chat room</li>
                  <li>Selection tracking</li>
                  <li>Trophy room</li>
                  <li>Prize pool updates</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-premier-white/70 mt-4">
              All official communications, selections, and results are managed through dedicated Discord channels, ensuring transparency and easy access for all players.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-premier-white">League Rules</h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>All players have the opportunity to pick each team twice throughout the season</li>
            <li>Selections must be in 24 hours before the first matchday kick off</li>
            <li>Late selections will default to the lowest ranking team in the league that week</li>
            <li>Points System:
              <ul className="list-disc pl-5 mt-2">
                <li>Win = 3 points</li>
                <li>Draw = 1 point</li>
                <li>Clean Sheet = Bonus 1 point</li>
                <li>Winning Margin {'>'}3 = Bonus 1 point</li>
              </ul>
            </li>
            <li>Results will be submitted within 24 hours of the final match</li>
            <li>Blank game weeks will be bypassed</li>
            <li>Two consecutive weeks of missed selections will forfeit entry</li>
            <li>Payment must be received before season start</li>
            <li>English Premier League teams only</li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-premier-white">Entry Fees</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>£20 from start of season</li>
            <li>£5 charge per week missed for new members</li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-premier-white">FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-premier-white/90">How will I know if I have already picked a team twice?</h3>
              <p className="mt-2">A document tracking all selections will be maintained, showing how many times each player has selected each team.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-premier-white/90">What happens during a blank/double gameweek?</h3>
              <p className="mt-2">Players can vote to play or bypass the round, with the decision based on majority vote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-premier-white/90">What happens in the event of a points draw?</h3>
              <p className="mt-2">Winners will be decided by the number of 3-point weeks accrued, followed by clean sheets if needed.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-premier-white">Making Selections</h2>
          <div className="bg-premier-purple/20 p-6 rounded-lg">
            <p className="mb-4">When it&#39;s time to make your weekly selection:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Visit the selections channel in Discord</li>
              <li>Use the format:
                <pre className="bg-premier-purple/30 p-2 rounded mt-2 text-premier-white/90">
                  Name:
                  Selection:
                </pre>
              </li>
              <li>Submit at least 24 hours before the first matchday</li>
              <li>Track your previous selections to avoid picking the same team more than twice</li>
            </ol>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-premier-white">Scoring System Example</h2>
          <div className="bg-premier-purple/20 p-6 rounded-lg">
            <div className="space-y-2">
              <p><span className="text-premier-gold">Selection:</span> Manchester City</p>
              <p><span className="text-premier-gold">Result:</span> Manchester City 3-0 Brentford</p>
              <p><span className="text-premier-gold">Points:</span> 5 (3 for win + 1 for clean sheet + 1 for margin {'>'}3)</p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default RulesPage;
