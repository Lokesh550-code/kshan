import { useState, useEffect } from "react";
import SectionCard from "./SectionCard";
import TrendingBar from "./TrendingBar";
import { getTrending } from "../../services/Api";
const SectionRow = () => {
const [trendingMovies, setTrendingMovies] = useState([
  {
    id: 1,
    title: "Dune: Messiah",
    media_type: "movie",
    release_date: "2026-12-18",
    vote_average: 0,
    poster_path:
      "https://plus.unsplash.com/premium_vector-1711987763169-97d809af51a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Stranger Things: Final Season",
    media_type: "tv",
    release_date: "2026-11-21",
    vote_average: 0,
    poster_path:
      "https://plus.unsplash.com/premium_vector-1721918268213-de47d05257f6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "The Batman Part II",
    media_type: "movie",
    release_date: "2026-10-02",
    vote_average: 0,
    poster_path:
      "https://plus.unsplash.com/premium_vector-1711987731643-e8232801047b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Knives Out: Wake Up Dead Man",
    media_type: "movie",
    release_date: "2026-09-12",
    vote_average: 0,
    poster_path:
      "https://plus.unsplash.com/premium_vector-1739198137648-0e018cb0954e?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Spider-Man: Brand New Day",
    media_type: "movie",
    release_date: "2026-07-31",
    vote_average: 0,
    poster_path:
      "https://plus.unsplash.com/premium_vector-1704897619683-c7fccbf5b380?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);
const [period, setPeriod] = useState('/trending/movie/week');

useEffect(() => {
  const getmovies = async (period) => {
    const arr = await getTrending(`${period}`);
    arr.length = 5;
    setTrendingMovies(arr);
  }
  getmovies(period);

}, [period]);
  return (
    <>
      <div className="w-full h-full">
        <TrendingBar setPeriod={setPeriod} />
        {trendingMovies.map((trendingMovie, idx) => {
          return (
            <SectionCard
              id={idx}
              title={trendingMovie.title}
              media_type={trendingMovie.media_type}
              release_date={trendingMovie.release_date}
              rating={trendingMovie.vote_average}
              imageUrl={trendingMovie.poster_path}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionRow;