import ArchiveHeader from "./components/ArchiveHeader";
import OverviewDocument from "./components/OverviewDocument";
import DossierTable from "./components/DossierTable";
import CaseNotesTimeline from "./components/CaseNotesTimeline";
import IntelligenceReports from "./components/IntelligenceReports";
import EvidenceBoard from "./components/EvidenceBoard";
import DocumentFooter from "./components/DocumentFooter";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-paper overflow-x-hidden selection:bg-ink selection:text-paper flicker">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-red z-[110] origin-left shadow-[0_0_10px_rgba(139,0,0,0.5)]"
        style={{ scaleX }}
      />

      <main className="relative z-10 pb-24">
        <ArchiveHeader />
        <OverviewDocument />
        <DossierTable />
        <CaseNotesTimeline />
        <IntelligenceReports />
        <EvidenceBoard />
        <DocumentFooter />
      </main>

      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full paper-texture opacity-20" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-ink/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-red/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}



