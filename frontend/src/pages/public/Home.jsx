import HeroSection from "../../components/home/HeroSection";
import StatsSection from "../../components/home/StatsSection";
import ServicesSection from "../../components/home/ServicesSection";
import CTASection from "../../components/home/CTASection";
import TrainerSection from "../../components/home/TrainerSection";
import ProgramSection from "../../components/home/ProgramSection"

const Home = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TrainerSection />
      <ProgramSection/>
      <CTASection />
    </div>
  );
};

export default Home;
