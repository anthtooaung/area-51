import { motion } from "motion/react";
import { MapPin, Shield, Calendar, Zap, User, Activity } from "lucide-react";

export default function DataGrid() {
  const dataItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Nevada, USA",
      sub: "Groom Lake, Salt Flat",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Type",
      value: "Military Facility",
      sub: "Highly Classified Test Site",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Established",
      value: "1955",
      sub: "Acquired by CIA for U-2",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Known For",
      value: "Experimental Aircraft",
      sub: "Stealth Tech, Black Projects",
    },
    {
      icon: <User className="w-6 h-6" />,
      label: "Operator",
      value: "U.S. Air Force",
      sub: "Nevada Test & Training Range",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      label: "Status",
      value: "Active",
      sub: "Restricted Airspace R-4808N",
    },
  ];

  return (
    <section id="key-data" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 mb-4"
          >
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="text-[10px] text-neon-green font-display tracking-widest uppercase">Structured Data Archive</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            KEY <span className="text-neon-green">DATA</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-charcoal/40 border border-white/10 rounded-2xl hover:border-neon-green/50 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 text-neon-green group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="text-[10px] font-display text-gray-500 mb-2 tracking-[0.3em] uppercase">
                  {item.label}
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400 font-light">
                  {item.sub}
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-transparent group-hover:border-neon-green/40 transition-all duration-500 rounded-tr-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
