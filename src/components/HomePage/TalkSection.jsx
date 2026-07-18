import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { getTalk } from "../../services/media";
const TalkSection = () => {

    const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const callingFunc = async () => {
      const arr = await getTalk();
          arr.length = 10;
          const finalArr = arr.map(item => ({...item, media_type: 'Movie'}))
          setMovieData(finalArr);
    }

    callingFunc();

  }, []);

  return (
    <div className="h-full w-full text-white text-3xl">
      <div className="h-7 w-full">
        <h1>Talk of the Town</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-2">
        {movieData.map((item, idx) => {
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

export default TalkSection;