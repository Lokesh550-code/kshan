import MovieCard from "./Moviecard";
const TalkSection = ({ movieData }) => {
  return (
    <div className="h-full w-full text-white">
      <div className="h-7 w-full">
        <h1>Talk of the Town</h1>
      </div>
      <div className="w-full mt-[0.4rem] flex flex-wrap gap-1 ">
        {movieData.map((movie, idx) => {
          return (
            <MovieCard
              id={movie.id}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              title={movie.title}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TalkSection;
