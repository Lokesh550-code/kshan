import { useEffect, useState } from "react";
import HeroPage from "../components/DetailsPage/HeroPage";
import CastComponet from "../components/DetailsPage/CastComponet";
import GenreComponet from "../components/DetailsPage/GenreComponet";
import { mediaDetail } from "../services/media";
import ReviewComponent from "../components/DetailsPage/ReviewComponent";

        const mediaType = `movie`;
        const id = 27205;

const DetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const api = async () => {
      setIsLoading(true);
      const data = await mediaDetail(mediaType, id);
      setResult(data);
      setIsLoading(false);
    };
    api();
  }, []);

  return (
    <div className="min-h-screen w-full mt-18 text-white">
      {<HeroPage result={result} isLoading={isLoading}/>}
      {<GenreComponet genre={result?.genres} origin_country={result?.origin_country} isLoading={isLoading}/>}
      {<CastComponet cast={result?.credits?.cast} crew={result?.credits?.crew} isLoading={isLoading}/>}
      {<ReviewComponent reviews={result?.reviews?.results} isLoading={isLoading}/>}
    </div>
  );
};

export default DetailsPage;
