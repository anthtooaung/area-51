import { motion } from "motion/react";
import { MapPin, Calendar, Shield, UserCheck } from "lucide-react";

export default function DataGrid() {
  const dataItems = [
    { label: "Location", value: "Nevada, USA", icon: MapPin },
    { label: "Established", value: "1955", icon: Calendar },
    { label: "Type", value: "Military Test Facility", icon: Shield },
    { label: "Operator", value: "U.S. Air Force", icon: UserCheck },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-1 h-4 bg-accent" />
        <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Key Data Grid</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="system-border bg-surface/30 p-8 system-glow group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/20 rounded-tr-lg" />
            
            <item.icon className="w-6 h-6 text-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">{item.label}</div>
            <div className="text-xl font-semibold text-text-primary tracking-tight">{item.value}</div>
            
            <div className="mt-8 flex items-center gap-1">
              <div className="w-1 h-1 bg-accent/40 rounded-full" />
              <div className="w-1 h-1 bg-accent/40 rounded-full" />
              <div className="w-1 h-1 bg-accent/40 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
