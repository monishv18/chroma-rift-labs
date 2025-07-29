import CrystalBackground from "../components/backgrounds/CrystalBackground";
import LuxuryNavbar from "../components/navigation/LuxuryNavbar";
import RingHeroSection from "../components/sections/RingHeroSection";
import RingFeaturesSection from "../components/sections/RingFeaturesSection";
import RingSpecsSection from "../components/sections/RingSpecsSection";

const LuxuryRing = () => {
  return (
    <div className="relative bg-[#1a1a1a] text-white overflow-x-hidden">
      <CrystalBackground />
      <LuxuryNavbar />
      
      <main>
        <section id="hero">
          <RingHeroSection />
        </section>
        
        <section id="features">
          <RingFeaturesSection />
        </section>
        
        <section id="specs">
          <RingSpecsSection />
        </section>
      </main>
    </div>
  );
};

export default LuxuryRing;