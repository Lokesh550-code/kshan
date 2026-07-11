import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import { SchedulePage } from "./pages/SchedulePage";
import {MostInterestedPage} from "./pages/MostInterestedPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ReactLenis root />
      <div className="relative bg-black h-fit">
        <Navbar />
        {/* <HomePage /> */}
        {/* <SchedulePage /> */}
        <MostInterestedPage />
        <Footer />
      </div>
    </>
  );
};

export default App;