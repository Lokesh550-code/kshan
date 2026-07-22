import { useEffect, useState } from "react";
import HeroPage from "../components/DetailsPage/HeroPage";
import CastComponet from "../components/DetailsPage/CastComponet";
import GenreComponet from "../components/DetailsPage/GenreComponet";
import { mediaDetail } from "../services/media";
import ReviewComponent from "../components/DetailsPage/ReviewComponent";

        // "https://api.themoviedb.org/3/movie/27205?append_to_response=credits",

        const mediaType = `movie`;
        const id = 27205;

const DetailsPage = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const api = async () => {
      const data = await mediaDetail(mediaType, id);
      setResult(data);
      console.log(data)
    };
    api();
  }, []);

  return (
    <div className="min-h-screen w-full mt-18 text-white">
      {result && <HeroPage result={result} />}
      {result && <GenreComponet genre={result.genres} origin_country={result.origin_country}/>}
      {result?.credits?.cast && (
        <CastComponet cast={result.credits.cast} crew={result.credits.crew} />
      )}
      {result?.reviews && <ReviewComponent reviews={result.reviews.results} />}
    </div>
  );
};

export default DetailsPage;
