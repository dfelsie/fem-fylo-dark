import { useState } from "react";
import Navbar from "./components/Navbar";
import IntroHero from "./components/IntroHero";
import FeatureGrid from "./components/FeatureGrid";
import ProductiveHero from "./components/ProductiveHero";
import Testimonials from "./components/Testimonials";
import EarlyAccessBox from "./components/EarlyAccessBox";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-[100vw]  overflow-x-hidden
/*       bg-cover
    bg-[url('/assets/images/bg-curvy-mobile.svg')]
    md:bg-[url('/assets/images/bg-curvy-desktop.svg')]
 */     bg-[#181f2a] text-white"
    >
      <Navbar />
      <div className="h-[25vh]"></div>
      <IntroHero />
      <div className="h-24" />
      <FeatureGrid />
      <div className="h-24" />
      <ProductiveHero />
      <div className="h-36" />
      <Testimonials />
      <div className="h-36" />
      <EarlyAccessBox />
      <Footer />
    </div>
  );
}

export default App;
