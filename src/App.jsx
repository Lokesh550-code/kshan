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

  const [upComingMovies, setUpComingMovies] = useState([
    {
      id: 1,
      title: "Dune: Messiah",
      releaseDate: "2026-12-18",
      platform: "Theaters",
      interestedPeople: 1840000,
      imageUrl:
        "https://plus.unsplash.com/premium_vector-1711987763169-97d809af51a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Stranger Things: Final Season",
      releaseDate: "2026-11-21",
      platform: "Netflix",
      interestedPeople: 2760000,
      imageUrl:
        "https://plus.unsplash.com/premium_vector-1721918268213-de47d05257f6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "The Batman Part II",
      releaseDate: "2026-10-02",
      platform: "Theaters",
      interestedPeople: 2310000,
      imageUrl:
        "https://plus.unsplash.com/premium_vector-1711987731643-e8232801047b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Knives Out: Wake Up Dead Man",
      releaseDate: "2026-09-12",
      platform: "Netflix",
      interestedPeople: 980000,
      imageUrl:
        "https://plus.unsplash.com/premium_vector-1739198137648-0e018cb0954e?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Spider-Man: Brand New Day",
      releaseDate: "2026-07-31",
      platform: "Theaters",
      interestedPeople: 3120000,
      imageUrl:
        "https://plus.unsplash.com/premium_vector-1704897619683-c7fccbf5b380?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  useEffect(() => {
    getTalk(setMovieData);
  }, []);

  // useEffect(() => {
  //   getTrending();
  // }, []);
  // console.log(movieData);
  return (
    <div className="relative bg-black h-fit">
      <Navbar />
      <Home movieData={movieData} upComingMovies={upComingMovies} />
      <Footer />
    </div>
  );
};

export default App;
