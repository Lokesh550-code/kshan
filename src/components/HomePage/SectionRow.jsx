import { useState, useEffect } from "react";
import SectionCard from "./SectionCard";
import TrendingBar from "./TrendingBar";
import { getTrending } from "../../services/media";
import RowSkeletonCard from '../SkeletonLoadingState/RowSkeletonCard';

const SectionRow = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [period, setPeriod] = useState("/trending/movie/week");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getmovies = async (period) => {
      setIsLoading(true);
      const arr = await getTrending(`${period}`);
      setTrendingMovies(arr.slice(0, 6));
      setIsLoading(false);
    };
    getmovies(period);
  }, [period]);

  
  return (
    <>
      <div className="w-full h-full">
        <TrendingBar setPeriod={setPeriod} />
        {isLoading && Array(6).fill(0).map((item, id) => {
          return (<RowSkeletonCard key={id} id={id}/>)
        })}
        {!isLoading && trendingMovies.map((trendingMovie, idx) => {
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
