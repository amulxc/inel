import CTA from "./components/Ui/cta";
import VideoCTA from "./components/Ui/videoCTA";
import Newsletter from "./components/Common/newsletter";
import Tab from "./components/home/vehicle-slide/slider";
import HeroVideoSection from "./components/home/hero-video-section";
import Sustainable from "./components/home/Sustainable";
import TechnologyInnovation from "./components/home/Technology-Innovation";
import InvestorRelations from "./components/home/Investor-Relations";
import MarqueeSection from "./components/home/marquee-setion";
import Newsroom from "./components/Newsroom/newsroom";


export default function Home() {

    
  return (
    <>
    
      <HeroVideoSection />
      <Tab />
      <Sustainable />
      <VideoCTA />
      <TechnologyInnovation />
      <InvestorRelations />
      <MarqueeSection />
      <CTA />
      <Newsroom />
      <Newsletter/>
      <div className="pb-20"></div>
    </>
  );
}
