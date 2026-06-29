import AnimeComponent from "../components/AnimeComponent";
import HiddenGems from "../components/CritiicallyAcclaimed";
import SectionRow from "../components/SectionRow";
import TalkSection from "../components/TalkSection";
import TopMovies from "../components/TopMovies";
import TopTv from "../components/TopTv";
import UpcomingMovies from "../components/UpcomingMovies";

const Home = ({ movieData}) => {

  return (
    // left
    <div className="w-full h-fit py-4 px-4 flex gap-4 mt-10">
      <div className="w-[70%] h-full flex flex-wrap gap-4 truncate">
        <TalkSection movieData={movieData}/>
        <UpcomingMovies />
        <TopMovies />
        <TopTv />
        <HiddenGems />
        <AnimeComponent />
      </div>

      {/* Right */}
      <div className="w-[30%] flex flex-col items-center justify-start">
        <SectionRow />
      </div>
    </div>
  );
};

export default Home;
