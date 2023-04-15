import { useState } from "react";
import Navbar from "./components/Navbar";
import IntroHero from "./components/IntroHero";
import FeatureGrid from "./components/FeatureGrid";

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
    </div>
  );
}

export default App;
