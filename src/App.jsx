import { ReactLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ReactLenis root />
      <div className="relative bg-black h-fit">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
