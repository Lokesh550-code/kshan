import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative bg-black h-fit">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
