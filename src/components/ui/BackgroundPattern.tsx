'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const BackgroundPattern: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-gradient-to-r from-premier-gold/10 to-premier-gold/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-[60%] -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-premier-purple-light/20 to-premier-purple/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-premier-gold/0 via-premier-gold/20 to-premier-gold/0" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-premier-gold/0 via-premier-gold/20 to-premier-gold/0" />
    </div>
  );
};

export default BackgroundPattern;
