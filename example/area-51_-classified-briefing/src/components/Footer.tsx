import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-border flex items-center justify-center font-mono font-bold text-lg text-accent">
            51
          </div>
          <div className="text-[10px] font-mono leading-tight uppercase tracking-widest text-text-secondary">
            &copy; {currentYear} THE MYSTERIOUS PLACE<br />
            GROUP PROJECT // AREA 51 RESEARCH TEAM<br />
            FILE: 51-OMEGA
          </div>
        </div>

        <div className="flex gap-12">
          <a href="#" className="text-[10px] font-mono text-text-secondary hover:text-accent uppercase tracking-widest transition-colors duration-300">Security Protocols</a>
          <a href="#" className="text-[10px] font-mono text-text-secondary hover:text-accent uppercase tracking-widest transition-colors duration-300">Access Logs</a>
          <a href="#" className="text-[10px] font-mono text-text-secondary hover:text-accent uppercase tracking-widest transition-colors duration-300">System Map</a>
        </div>

        <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest opacity-40">
          SYSTEM STATUS: <span className="text-green-500 font-bold">VERIFIED</span> // LAST UPDATE: 18 MAR 2026
        </div>
      </div>
    </footer>
  );
}
