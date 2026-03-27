import { motion } from "motion/react";
import { BarChart, TrendingUp, Users, Eye } from "lucide-react";

export default function DataVisualization() {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-neon-green" />,
      label: "Sighting Reports",
      value: "15,000+",
      sub: "Annual Global Incidents",
      percent: 85,
    },
    {
      icon: <Users className="w-6 h-6 text-neon-green" />,
      label: "Classified Personnel",
      value: "2,000",
      sub: "Active Personnel On-Site",
      percent: 45,
    },
    {
      icon: <Eye className="w-6 h-6 text-neon-green" />,
      label: "Surveillance Coverage",
      value: "100%",
      sub: "Full Perimeter Monitoring",
      percent: 100,
    },
  ];

  return (
    <section id="visuals" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 mb-4"
          >
            <BarChart className="w-4 h-4 text-neon-green" />
            <span className="text-[10px] text-neon-green font-display tracking-widest uppercase">Data Visualization</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            ARCHIVE <span className="text-neon-green text-glow">METRICS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-charcoal/40 border border-white/10 rounded-2xl glow-border hover:bg-neon-green/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-neon-green/10 rounded-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white font-display tracking-tighter">{stat.value}</div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-[10px] font-display text-gray-500 uppercase tracking-widest mb-2">
                  <span>{stat.label}</span>
                  <span>{stat.percent}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                    className="h-full bg-neon-green shadow-[0_0_10px_rgba(57,255,20,0.8)]"
                  />
                </div>
              </div>
              
              <p className="text-xs text-gray-400 font-light tracking-widest uppercase">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Grid Visualization */}
        <div className="mt-16 p-8 bg-charcoal/40 border border-white/10 rounded-2xl overflow-hidden relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-display text-gray-500 tracking-[0.3em] uppercase">Frequency Analysis</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse delay-75" />
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-2 h-32 items-end">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className={`w-full rounded-t-sm ${i % 2 === 0 ? 'bg-neon-green/40' : 'bg-neon-cyan/40'}`}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
