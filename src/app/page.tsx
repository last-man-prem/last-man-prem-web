'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Home: FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1 
          className="text-6xl font-bold text-premier-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Last Man Premier League
        </motion.h1>
        <motion.p 
          className="text-xl text-premier-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A unique take on Last Man Standing where you stay in until the end. 
          Pick your teams wisely and compete for the seasonal prize pool.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="/join-now" 
            className="inline-block bg-premier-gold text-premier-purple px-8 py-3 rounded-md text-lg font-semibold hover:bg-premier-purple-light hover:text-premier-gold transition-colors"
          >
            Join the League
          </a>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-premier-purple-light p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-premier-gold mb-3">Pick Your Teams</h3>
          <p className="text-premier-white/80">Choose each Premier League team twice throughout the season. Strategy is key!</p>
        </motion.div>

        <motion.div 
          className="bg-premier-purple-light p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-premier-gold mb-3">Score Points</h3>
          <p className="text-premier-white/80">Earn points for wins, clean sheets, and big victories. Every match counts!</p>
        </motion.div>

        <motion.div 
          className="bg-premier-purple-light p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-premier-gold mb-3">Win Prizes</h3>
          <p className="text-premier-white/80">Compete for the seasonal prize pool. May the best manager win!</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
