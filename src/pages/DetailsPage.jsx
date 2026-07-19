import axios from "axios";
import { useEffect, useState } from "react";
import HeroPage from "../components/DetailsPage/HeroPage";
import DirectorComponent from "../components/DetailsPage/DirectorComponent";
import CastComponet from "../components/DetailsPage/CastComponet";

const DetailsPage = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const api = async () => {
      const data = await axios.get("https://api.themoviedb.org/3/movie/27205?append_to_response=credits", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      });
      setResult(data.data);
    };
    api();
  }, []);

  return (
    <div className="min-h-screen w-full mt-18 text-white">
      {result && (<HeroPage result={result}/>)}
      {result?.credits && (<DirectorComponent credits={result.credits}/>)}
      {result?.credits?.cast && (<CastComponet cast={result.credits.cast}/>)}
    </div>
  );
};

export default DetailsPage;
