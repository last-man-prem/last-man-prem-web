'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from '@/components/ui/BackgroundPattern';
import Image from 'next/image';
import { getBackgroundImages } from '@/utils/backgroundImages';
import { getAssetPath } from '@/utils/assetPath';
import { usePathname } from 'next/navigation';

const Home: FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <BackgroundPattern />
      
      {/* Background Images */}
      <div className="fixed inset-0 opacity-25 -z-10">
        {getBackgroundImages().map((image, index, array) => {
          const src = getAssetPath(`/images/backgrounds/homepage/${image}`);
          const cycleDelay = 10; // Delay in seconds between each transition
          const totalImages = array.length;

          return (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                transition: { 
                  duration: cycleDelay,
                  delay: index * cycleDelay,
                  repeat: Infinity,
                  repeatDelay: (totalImages - 1) * cycleDelay,
                  times: [0, 0.1, 0.9, 1] // Controls fade in/out timing
                }
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center blur-[1px]"
                priority={index === 0}
                sizes="100vw"
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Hero Section */}
      <section className="text-center space-y-8 relative">
        {/* Premier League style decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-premier-purple-light rounded-full blur-3xl opacity-30 -z-10" />
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-7xl font-black mb-2">
            <span className="relative">
              <span className="absolute inset-0 text-premier-gold blur-[2px] opacity-20">
                Last Man Premier League
              </span>
              <span className="relative text-premier-white drop-shadow-[0_0_30px_rgba(74,22,84,0.8)]">
                Last Man Premier League
              </span>
            </span>
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-premier-white/30 via-premier-white to-premier-white/30 mx-auto rounded-full shadow-lg shadow-premier-purple/50" />
        </motion.div>

        <motion.p 
          className="text-2xl text-premier-white/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A unique take on Last Man Standing where your game doesn&apos;t end until the final whistle of the season. 
          Pick your teams wisely and compete for the seasonal prize pool!
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="/join-now" 
            className="group relative inline-flex items-center px-12 py-4 overflow-hidden rounded-full bg-premier-gold text-premier-purple text-lg font-bold shadow-xl shadow-premier-gold/30 transition-all duration-300 hover:scale-105 hover:shadow-premier-gold/40"
          >
            <span className="absolute left-0 w-0 h-full bg-premier-purple transition-all duration-500 ease-out group-hover:w-full"/>
            <span className="relative group-hover:text-premier-gold transition-colors duration-300 ease-out">
              Join the League
            </span>
          </a>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="mt-24 grid md:grid-cols-3 gap-8 relative">
        <motion.div 
          className="group relative overflow-hidden bg-gradient-to-br from-premier-purple to-[#2D0031] p-8 rounded-xl shadow-xl transition-all duration-300 border border-premier-gold/10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 40px rgba(239, 184, 16, 0.3)"
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-premier-gold/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-premier-gold/30 transition-all duration-300" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-premier-gold/10">
                <Image 
                  src={getAssetPath("/images/team-selection.webp")}
                  alt="" 
                  width={32} 
                  height={32} 
                  className="opacity-90"
                  priority
                />
              </div>
              <h3 className="text-2xl font-black text-premier-gold">Pick Your Teams</h3>
            </div>
            <p className="text-premier-white/70 text-lg leading-relaxed">Choose each Premier League team twice throughout the season. Strategy is key!</p>
          </div>
        </motion.div>

        <motion.div 
          className="group relative overflow-hidden bg-gradient-to-br from-premier-purple to-[#2D0031] p-8 rounded-xl shadow-xl transition-all duration-300 border border-premier-gold/10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 40px rgba(239, 184, 16, 0.3)"
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-premier-gold/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-premier-gold/30 transition-all duration-300" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-premier-gold/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-premier-gold">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75c-1.036 0-1.875-.84-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75C3.84 21.75 3 20.91 3 19.875v-6.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-premier-gold">Score Points</h3>
            </div>
            <p className="text-premier-white/70 text-lg leading-relaxed">Earn points for wins, clean sheets, and big victories. Every match counts!</p>
          </div>
        </motion.div>

        <motion.div 
          className="group relative overflow-hidden bg-gradient-to-br from-premier-purple to-[#2D0031] p-8 rounded-xl shadow-xl transition-all duration-300 border border-premier-gold/10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 40px rgba(239, 184, 16, 0.3)"
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-premier-gold/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-premier-gold/30 transition-all duration-300" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-premier-gold/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-premier-gold">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-premier-gold">Win Prizes</h3>
            </div>
            <p className="text-premier-white/70 text-lg leading-relaxed">Compete for the seasonal prize pool. May the best manager win!</p>
          </div>
        </motion.div>
      </section>


    </div>
  );
};

export default Home;
