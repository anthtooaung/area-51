import Header from "./components/Header";
import Overview from "./components/Overview";
import DataGrid from "./components/DataGrid";
import Timeline from "./components/Timeline";
import IntelligenceAccordion from "./components/IntelligenceAccordion";
import ImageGallery from "./components/ImageGallery";
import DataHighlights from "./components/DataHighlights";
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
    <div className="relative min-h-screen bg-bg overflow-x-hidden selection:bg-accent selection:text-bg">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[110] origin-left shadow-[0_0_10px_rgba(245,158,11,0.5)]"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="relative z-10 pb-24">
        <Overview />
        <DataGrid />
        <Timeline />
        <IntelligenceAccordion />
        <ImageGallery />
        <DataHighlights />
      </main>

      <Footer />

      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-red/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}




