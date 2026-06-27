import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { getTalk } from "./services/Api";

const App = () => {
  const [movieData, setMovieData] = useState([
    {
      id: 1,
      title: "Interstellar",
      imageURL: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      type: "Movie",
    },
    {
      id: 2,
      title: "Stranger Things",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1782368488800-6ae6f8037e0d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TV Series",
    },
    {
      id: 3,
      title: "Dune: Part Two",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1782249091560-38b59f6fcc32?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "New Movie",
    },
    {
      id: 4,
      title: "Breaking Bad",
      imageURL:
        "https://images.unsplash.com/photo-1761258772334-834a248d8209?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Classic Series",
    },
    {
      id: 5,
      title: "House of the Dragon",
      imageURL:
        "https://images.unsplash.com/photo-1781460576192-f86f09a7e40e?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "New Season",
    },
    {
      id: 6,
      title: "The Dark Knight",
      imageURL:
        "https://images.unsplash.com/photo-1781114385903-150f82cb442a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Old Movie",
    },
    {
      id: 7,
      title: "The Last of Us",
      imageURL:
        "https://images.unsplash.com/photo-1781972959862-debfb97d22f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TV Series",
    },
    {
      id: 8,
      title: "Avatar: The Way of Water",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1781666873402-8ecb49e12985?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Trending",
    },
    {
      id: 9,
      title: "The Bear",
      imageURL:
        "https://images.unsplash.com/photo-1781186992124-54dffff0b79c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "New Season",
    },
    {
      id: 10,
      title: "Arcane",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1763727820607-3c1a9cd8c3dc?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Animated Series",
    },
  ]);

  useEffect(() => {
    const callingFunc = async () => {
      const arr = await getTalk();
          arr.length = 10;
          setMovieData(arr);
    }

    callingFunc();

  }, []);
  return (
    <div className="relative bg-black h-fit">
      <Navbar />
      <Home movieData={movieData}/>
      <Footer />
    </div>
  );
};

export default App;
