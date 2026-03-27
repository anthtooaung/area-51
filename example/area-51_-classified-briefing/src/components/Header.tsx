import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <h1 className="text-lg font-bold tracking-widest">
            Area 51: Classified Briefing
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] text-text-secondary uppercase tracking-widest">Access Level</span>
            <span className="text-xs text-accent font-mono font-medium uppercase">Restricted // Level 5</span>
          </div>
          <div className="h-8 w-px bg-border hidden md:block" />
          <div className="text-right">
            <span className="text-[10px] text-text-secondary uppercase tracking-widest block">System Status</span>
            <span className="text-xs text-green-500 font-mono font-medium uppercase">Secure</span>
          </div>
        </div>
      </div>
      <div className="loading-bar" />
    </header>
  );
}
