import { useState } from "react";
import Navbar from "./components/Navbar";
import IntroHero from "./components/IntroHero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100vw] h-[3000vh] overflow-x-hidden bg-gray-800 text-white">
      <Navbar />
      <div className="h-[25vh]"></div>
      <IntroHero />
    </div>
  );
}

export default App;
