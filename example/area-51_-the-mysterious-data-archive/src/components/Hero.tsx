import { motion } from "motion/react";
import { ChevronDown, Radar } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'brightness(0.3) contrast(1.2)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Radar className="w-16 h-16 text-neon-green/80 animate-pulse" />
            <div className="absolute inset-0 bg-neon-green/20 blur-2xl rounded-full" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter text-white drop-shadow-2xl"
        >
          THE <span className="text-neon-green text-glow">MYSTERIOUS</span> PLACE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 font-light mb-10 tracking-widest uppercase"
        >
          Uncover the Secrets of Area 51
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="px-10 py-4 bg-neon-green text-black font-display font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.4)]"
          >
            EXPLORE NOW
          </a>
          <a
            href="#secrets"
            className="px-10 py-4 border border-neon-green/50 text-neon-green font-display font-bold rounded-full hover:bg-neon-green/10 transition-all duration-300"
          >
            VIEW SECRETS
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neon-green/60 font-display">Initiate Descent</span>
        <ChevronDown className="w-6 h-6 text-neon-green animate-bounce" />
      </motion.div>
    </section>
  );
}
