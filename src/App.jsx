import { ReactLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ReactLenis root />
      <div className="relative bg-black h-fit">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
};

export default App;
