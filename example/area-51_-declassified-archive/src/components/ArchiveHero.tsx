import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FileText, ShieldAlert } from "lucide-react";

export default function ArchiveHero() {
  const [text, setText] = useState("");
  const fullText = "TOP SECRET // CLASSIFIED INFORMATION // ACCESS RESTRICTED TO LEVEL 5 PERSONNEL ONLY. SYSTEM BOOTING... RETRIEVING DATA ARCHIVE FOR GROOM LAKE FACILITY (AREA 51).";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="archive" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl w-full">
        {/* Classified Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 2, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: -15 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -top-10 -right-10 z-20"
        >
          <div className="classified-stamp">TOP SECRET</div>
        </motion.div>

        {/* Document Header */}
        <div className="border border-white/20 bg-charcoal/50 backdrop-blur-md p-8 rounded-t-lg border-b-0">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-neon-green" />
              <h1 className="text-xl md:text-2xl font-bold tracking-tighter">DATA ARCHIVE: <span className="text-neon-green">GROOM LAKE</span></h1>
            </div>
            <div className="text-[10px] font-mono text-gray-500 text-right">
              REF: 51-X-992<br />
              DATE: 18 MAR 2026
            </div>
          </div>

          <div className="font-mono text-sm md:text-base text-neon-green/80 leading-relaxed min-h-[120px]">
            <span className="mr-2 inline-block w-2 h-4 bg-neon-green animate-pulse align-middle" />
            {text}
          </div>
        </div>

        {/* Overview Panel */}
        <div className="border border-white/20 bg-black/80 p-8 rounded-b-lg border-t-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xs font-display text-gray-500 mb-4 tracking-[0.3em]">Subject Overview</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Area 51 is a highly classified United States Air Force facility located within the Nevada Test and Training Range. 
                The facility is officially called Homey Airport or Groom Lake, named after the salt flat situated next to its airfield.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex items-center gap-4 p-4 bg-red-950/20 border border-red-900/30 rounded-lg">
                <ShieldAlert className="w-8 h-8 text-red-600 shrink-0" />
                <p className="text-[10px] text-red-500/80 font-mono uppercase leading-tight">
                  WARNING: UNAUTHORIZED ACCESS TO THIS DATA IS A FEDERAL OFFENSE. SURVEILLANCE ACTIVE.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex justify-center"
        >
          <a href="#key-data" className="group flex flex-col items-center gap-2">
            <span className="text-[10px] font-display text-neon-green/60 tracking-[0.4em] uppercase">Decrypting More Data</span>
            <div className="w-px h-12 bg-gradient-to-b from-neon-green to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
