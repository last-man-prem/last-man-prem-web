'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navigation: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav 
        className="p-6 flex justify-between items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link 
          href="/" 
          className="group relative inline-flex items-center px-6 py-2 overflow-hidden rounded-full bg-premier-white/10 backdrop-blur-sm text-premier-white text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-premier-white/20"
        >
          <span className="absolute left-0 w-0 h-full bg-premier-gold transition-all duration-500 ease-out group-hover:w-full"/>
          <span className="relative group-hover:text-premier-purple transition-colors duration-300 ease-out">
            Home
          </span>
        </Link>
        <div className="flex gap-4">
          <Link 
            href="/how-it-works" 
            className="group relative inline-flex items-center px-6 py-2 overflow-hidden rounded-full bg-premier-white/10 backdrop-blur-sm text-premier-white text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-premier-white/20"
          >
            <span className="absolute left-0 w-0 h-full bg-premier-gold transition-all duration-500 ease-out group-hover:w-full"/>
            <span className="relative group-hover:text-premier-purple transition-colors duration-300 ease-out">
              How It Works
            </span>
          </Link>
          <Link 
            href="/join-now" 
            className="group relative inline-flex items-center px-6 py-2 overflow-hidden rounded-full bg-premier-white/10 backdrop-blur-sm text-premier-white text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-premier-white/20"
          >
            <span className="absolute left-0 w-0 h-full bg-premier-gold transition-all duration-500 ease-out group-hover:w-full"/>
            <span className="relative group-hover:text-premier-purple transition-colors duration-300 ease-out">
              Join Now
            </span>
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navigation;
