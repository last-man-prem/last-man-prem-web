'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <header className="bg-premier-purple text-premier-white">
      <motion.nav 
        className="container mx-auto px-4 py-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-premier-gold hover:text-premier-white transition-colors">
            Last Man Premier League
          </Link>
          
          <ul className="flex space-x-8">
            <li>
              <Link href="/rules" className="hover:text-premier-gold transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/join-now" className="bg-premier-gold text-premier-purple px-4 py-2 rounded-md hover:bg-premier-purple-light hover:text-premier-gold transition-colors">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navigation;
