import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import TrendingPage from "./pages/TrendingPage";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <>
      <ReactLenis root />
      <SkeletonTheme highlightColor="#A6A09B" baseColor="#292524">
      <div className="relative bg-black h-fit">
        <Navbar />
        {/* <HomePage /> */}
        <TrendingPage />
        <Footer />
      </div>
      </SkeletonTheme>
    </>
  );
};

export default App;