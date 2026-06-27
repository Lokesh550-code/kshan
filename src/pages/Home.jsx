import Netflixrecomendation from "../components/Netflixrecomendation";
import PrimeRecomendation from "../components/PrimeRecomendation";
import SectionRow from "../components/SectionRow";
import TalkSection from "../components/TalkSection";

const Home = ({ movieData}) => {

  return (
    // left
    <div className="w-full h-fit py-4 px-4 flex gap-4 mt-10">
      <div className="w-[70%] h-full flex flex-wrap gap-4 truncate">
        <TalkSection movieData={movieData}/>
        <Netflixrecomendation movieData={movieData}/>
        <PrimeRecomendation movieData={movieData} />
      </div>

      {/* Right */}
      <div className="w-[30%] flex flex-col items-center justify-start">
        <SectionRow />
      </div>
    </div>
  );
};

export default Home;
