import { motion } from "motion/react";
import { Database, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-neon-green/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-neon-green" />
            <span className="font-display text-lg font-bold tracking-tighter text-white">
              AREA 51 <span className="text-neon-green">DATA ARCHIVE</span>
            </span>
          </div>

          <div className="flex items-center gap-4 p-3 bg-red-950/20 border border-red-900/30 rounded-lg max-w-xs">
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
            <p className="text-[8px] text-red-500/80 font-mono uppercase leading-tight">
              CLASSIFIED DATA. UNAUTHORIZED REPRODUCTION IS PROHIBITED BY FEDERAL LAW.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/5 pt-8">
          <div className="text-gray-600 text-[10px] font-mono tracking-widest uppercase text-center md:text-left">
            &copy; {currentYear} THE MYSTERIOUS PLACE. ARCHIVE VERSION 5.1.0
          </div>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="text-gray-600 hover:text-neon-green text-[10px] font-display tracking-widest uppercase transition-colors duration-300">Security Protocols</a>
            <a href="#" className="text-gray-600 hover:text-neon-green text-[10px] font-display tracking-widest uppercase transition-colors duration-300">Access Logs</a>
          </div>

          <div className="text-gray-600 text-[10px] font-mono tracking-widest uppercase text-center md:text-right">
            SYSTEM STATUS: <span className="text-neon-green">ENCRYPTED</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-neon-green/20 blur-xl" />
    </footer>
  );
}

