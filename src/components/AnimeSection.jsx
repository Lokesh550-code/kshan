import { getAnime } from "../services/Api";
import AnimeCard from "./AnimeCard";
import { useState, useEffect } from "react";
const AnimeSection = () => {
  const [anime, setAnime] = useState([
    {
      id: 1,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
        },
      },
      type: "TV",
      title_english: "Attack on Titan",
    },
    {
      id: 2,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
        },
      },
      type: "TV",
      title_english: "Demon Slayer: Kimetsu no Yaiba",
    },
    {
      id: 3,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
        },
      },
      type: "TV",
      title_english: "Jujutsu Kaisen",
    },
    {
      id: 4,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
        },
      },
      type: "TV",
      title_english: "One Punch Man",
    },
    {
      id: 5,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
        },
      },
      type: "TV",
      title_english: "Chainsaw Man",
    },
    {
      id: 6,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1825/135867l.jpg",
        },
      },
      type: "TV",
      title_english: "Frieren: Beyond Journey's End",
    },
    {
      id: 7,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg",
        },
      },
      type: "TV",
      title_english: "Vinland Saga",
    },
    {
      id: 8,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/5/87048l.jpg",
        },
      },
      type: "Movie",
      title_english: "Your Name",
    },
    {
      id: 9,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
        },
      },
      type: "Movie",
      title_english: "A Silent Voice",
    },
    {
      id: 10,
      images: {
        jpg: {
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/1804/126534l.jpg",
        },
      },
      type: "Movie",
      title_english: "Suzume",
    },
  ]);

  useEffect(() => {
    const callingFunc = async () => {
      const arr = await getAnime();
      arr.length = 10;
      setAnime(arr);
    };

    callingFunc();
  }, []);

  return (
    <div className="h-full w-full text-white text-3xl">
      <div className="h-7 w-full">
        <h1>Top Anime</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-1 ">
        {anime.map((movie, idx) => {
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