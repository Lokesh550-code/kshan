import { useState, useEffect } from "react";
import SectionCard from "./SectionCard";
import TrendingBar from "./TrendingBar";
import { getTrending } from "../../services/media";

const SectionRow = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [period, setPeriod] = useState("/trending/movie/week");

  useEffect(() => {
    const getmovies = async (period) => {
      const arr = await getTrending(`${period}`);
      arr.length = 5;
      setTrendingMovies(arr);
    };
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
