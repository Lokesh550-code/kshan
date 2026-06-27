import SectionCard from "./SectionCard";
const SectionRow = ({ upComingMovies }) => {
  // console.log(upComingMovies);
  return (
    <>
      <div className="w-full h-full">
        {upComingMovies.map((upComingMovie) => {
          return (
            <SectionCard
              id={upComingMovie.id}
              title={upComingMovie.title}
              releaseDate={upComingMovie.releaseDate}
              platform={upComingMovie.platform}
              interestedPeople={upComingMovie.interestedPeople}
              imageUrl={upComingMovie.imageUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionRow;
