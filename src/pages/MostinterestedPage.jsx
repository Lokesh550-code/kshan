import SideBar from "../components/MostInterestedPage/SideBar";
import Content from "../components/MostInterestedPage/Content"
import { useState } from "react";
import { useEffect } from "react";
import { getTrendingMedia } from "../services/Api";

export const MostInterestedPage = () => {
    const [timePeriod, setTimePeriod] = useState('/trending/movie/week');
    const [timePeriodTv, setTimePeriodTv] = useState('/trending/tv/week');
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const getMedia = async () => {
            const data = await getTrendingMedia(timePeriod, timePeriodTv);
            setTrending(data);
        } 
        getMedia();
    }, [timePeriod, timePeriodTv]);
  return (
    <>
      <div className=" h-fit w-full mt-18 relative flex justify-between px-10">
        <SideBar setTimePeriod = {setTimePeriod} setTimePeriodTv = {setTimePeriodTv} />
        <Content trending={trending}/>
      </div>
    </>
  );
};

export default MostInterestedPage;
