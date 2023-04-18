import { useState } from "react";
import Navbar from "./components/Navbar";
import IntroHero from "./components/IntroHero";
import FeatureGrid from "./components/FeatureGrid";
import ProductiveHero from "./components/ProductiveHero";
import Testimonials from "./components/Testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-[100vw] h-[3000vh] overflow-x-hidden
/*       bg-cover
    bg-[url('/assets/images/bg-curvy-mobile.svg')]
    md:bg-[url('/assets/images/bg-curvy-desktop.svg')]
 */     bg-gray-900 text-white"
    >
      <Navbar />
      <div className="h-[25vh]"></div>
      <IntroHero />
      <div className="h-32" />
      <FeatureGrid />
      <div className="h-24" />
      <ProductiveHero />
      <div className="h-36" />
      <Testimonials />
    </div>
  );
}

export default App;
