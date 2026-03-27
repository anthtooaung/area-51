import { motion } from "motion/react";
import { Menu, X, Database } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Archive", href: "#archive" },
    { name: "Key Data", href: "#key-data" },
    { name: "Timeline", href: "#timeline" },
    { name: "Conspiracies", href: "#conspiracies" },
    { name: "Visuals", href: "#visuals" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-neon-green" />
            <span className="font-display text-lg font-bold tracking-tighter text-white">
              AREA 51 <span className="text-neon-green">DATA ARCHIVE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-neon-green px-2 py-1 rounded-md text-[10px] font-medium transition-colors uppercase tracking-[0.2em] font-display"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-green p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-neon-green/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-neon-green block px-3 py-2 rounded-md text-xs font-medium font-display uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

