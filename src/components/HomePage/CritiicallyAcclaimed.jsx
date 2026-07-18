import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { getCritiicallyAcclaimed } from "../../services/media";
const CritiicallyAcclaimed = () => {
  const [underRatedMoives, setUnderRatedMovies] = useState([]);

  useEffect(() => {
    const callingFunc = async () => {
      const arr = await getCritiicallyAcclaimed();
      arr.length = 10;
      setUnderRatedMovies(arr);
    };
    callingFunc();
  }, []);

  return (
    <div className="h-full w-full text-white text-3xl">
      <div className="h-7 w-full">
        <h1>Critically Acclaimed</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-2">
        {underRatedMoives.map((item, idx) => {
          return (
            <MovieCard
              id={item.id}
              poster_path={item.poster_path}
              type={item.media_type}
              title={item.title || item.name}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CritiicallyAcclaimed;
