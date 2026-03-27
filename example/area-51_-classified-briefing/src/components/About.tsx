import { motion } from "motion/react";
import { History, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const facts = [
    {
      icon: <MapPin className="w-8 h-8 text-neon-green" />,
      title: "Location",
      description: "Groom Lake, Nevada. A remote detachment of Edwards Air Force Base.",
    },
    {
      icon: <History className="w-8 h-8 text-neon-green" />,
      title: "Established",
      description: "Acquired by the CIA in 1955 for the development of the U-2 spy plane.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-neon-green" />,
      title: "Secrecy",
      description: "The government didn't officially acknowledge its existence until 2013.",
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-green" />,
      title: "Testing",
      description: "Birthplace of the SR-71 Blackbird and F-117 Nighthawk stealth fighters.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              WHAT IS <span className="text-neon-green">AREA 51?</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 font-light">
              Area 51 is the common name of a highly classified United States Air Force facility located within the Nevada Test and Training Range. 
              The facility is officially called Homey Airport or Groom Lake, named after the salt flat situated next to its airfield.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 font-light">
              For decades, the site was shrouded in complete mystery, fueling countless conspiracy theories about extraterrestrial life and advanced government technology. 
              While officially a testing ground for experimental aircraft, the true nature of what happens behind the guarded fences remains a subject of global fascination.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-neon-green/30 transition-all duration-300 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {fact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{fact.title}</h3>
                  <p className="text-sm text-gray-500">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glow-border">
              <img 
                src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1000&auto=format&fit=crop" 
                alt="Secret Military Base" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-[10px] text-red-600 font-display tracking-widest uppercase">Restricted Airspace</span>
                </div>
                <h4 className="text-white font-display text-lg tracking-tighter">GROOM LAKE FACILITY</h4>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-green/10 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-green/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
