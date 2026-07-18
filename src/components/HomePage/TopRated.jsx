import { getTop } from "../../services/media";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
const TopRated = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    const callingFunc = async () => {
      try {
        const arr = await getTop();
        setTop(arr.slice(0, 10));
      } catch (err) {
        console.error(err.message);
      }
    };

    callingFunc();
  }, []);
  return (
    <div className="h-full w-full text-white text-3xl">
      <div className="h-7 w-full">
        <h1>Top Rated</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-2">
        {top.map((item, idx) => {
          return (
            <MovieCard
              id={item.id}
              poster_path={item.poster_path}
              type={item.media_type}
              title={item.title || item.name }
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
