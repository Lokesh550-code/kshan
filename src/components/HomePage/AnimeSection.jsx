import { getAnime } from "../../services/anime";
import AnimeCard from "./AnimeCard";
import { useState, useEffect } from "react";
import SkeletonCards from "../SkeletonLoadingState/SkeletonCards";

const AnimeSection = () => {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callingFunc = async () => {
      setIsLoading(true);
      const arr = await getAnime();
      setAnime(arr.slice(0, 10));
      setIsLoading(false);
    };

    callingFunc();
  }, []);

  return (
    <div className="h-full w-full text-white text-3xl">
      <div className="h-7 w-full">
        <h1>Top Anime</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-2 ">
        {isLoading &&
          Array(10)
            .fill(0)
            .map((elem, id) => {
              return <SkeletonCards key={id} />;
            })}
        {!isLoading && anime.map((movie, idx) => {
          return (
            <AnimeCard
              id={movie.id}
              image={movie.images.jpg.large_image_url}
              type={movie.type}
              title={movie.title_english}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimeSection;