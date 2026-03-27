import Navbar from "./components/Navbar";
import ArchiveHero from "./components/ArchiveHero";
import DataGrid from "./components/DataGrid";
import Timeline from "./components/Timeline";
import Secrets from "./components/Secrets";
import Gallery from "./components/Gallery";
import DataVisualization from "./components/DataVisualization";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-neon-green selection:text-black">
      {/* CRT & Scanline Overlays */}
      <div className="crt-overlay" />
      <div className="scanline" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-green z-[60] origin-left shadow-[0_0_10px_rgba(57,255,20,0.8)]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <ArchiveHero />
        <DataGrid />
        <Timeline />
        <Secrets />
        <DataVisualization />
        <Gallery />
      </main>

      <Footer />

      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neon-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-cyan/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}


