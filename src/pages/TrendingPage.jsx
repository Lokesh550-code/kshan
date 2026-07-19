import SideBar from "../components/TrendingPage/SideBar";
import Content from "../components/TrendingPage/Content"
import { useState } from "react";
import { useEffect } from "react";
import { getTrendingMedia } from "../services/media";

export const TrendingPage = () => {
    const [timePeriod, setTimePeriod] = useState('/trending/movie/week');
    const [timePeriodTv, setTimePeriodTv] = useState('/trending/tv/week');
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getMedia = async () => {
            setIsLoading(true);
            const data = await getTrendingMedia(timePeriod, timePeriodTv);
            setTrending(data);
            setIsLoading(false);
        } 
        getMedia();
    }, [timePeriod, timePeriodTv]);
  return (
    <>
      <div className=" h-fit w-full mt-18 relative flex justify-between px-10">
        <SideBar setTimePeriod = {setTimePeriod} setTimePeriodTv = {setTimePeriodTv} />
        <Content trending={trending} isLoading={isLoading}/>
      </div>
    </>
  );
};

export default TrendingPage;
