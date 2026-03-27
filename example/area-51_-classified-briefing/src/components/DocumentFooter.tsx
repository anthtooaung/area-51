import { motion } from "motion/react";

export default function DocumentFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 max-w-5xl mx-auto border-t-2 border-ink/20 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-ink flex items-center justify-center font-mono font-bold text-lg">
            US
          </div>
          <div className="text-[10px] font-mono leading-tight uppercase tracking-widest text-ink/60">
            &copy; {currentYear} THE MYSTERIOUS PLACE<br />
            GROUP PROJECT // AREA 51 RESEARCH TEAM<br />
            FILE: 51-OMEGA
          </div>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-mono text-ink/40 hover:text-accent-red uppercase tracking-widest transition-colors duration-300">Security Protocols</a>
          <a href="#" className="text-[10px] font-mono text-ink/40 hover:text-accent-red uppercase tracking-widest transition-colors duration-300">Access Logs</a>
        </div>

        <div className="text-[10px] font-mono text-ink/40 text-right uppercase tracking-widest">
          SYSTEM STATUS: <span className="text-green-800 font-bold">VERIFIED</span><br />
          LAST UPDATE: 18 MAR 2026
        </div>
      </div>
      
      {/* Redacted Stamp */}
      <div className="absolute top-4 right-4 stamp stamp-redacted text-xs p-1 rotate-[-5deg] opacity-20">REDACTED</div>
    </footer>
  );
}
