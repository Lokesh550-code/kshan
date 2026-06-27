import MovieCard from "./Moviecard";
const Netflixrecomendation = ({movieData}) => {
  return (
    <div className="h-full w-full text-white">
      <div className="h-7 w-full">
        <h1>Don't Miss These on Netflix</h1>
      </div>
      <div className="w-full mt-[0.4rem] flex flex-wrap gap-1 ">
        {movieData.map((movie, idx) => {
          return (
            <MovieCard
              id={movie.id}
              imageUrl={movie.imageURL}
              type={movie.type}
              title={movie.title}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Netflixrecomendation