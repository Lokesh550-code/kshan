const MovieCard = (props) => {
  const isLong = props.title.length > 16;

  return (
    <>
      <div
        id={props.id}
        className="group w-28 h-38 bg-black rounded-sm overflow-hidden p-1 hover:bg-stone-900 cursor-pointer transition-all"
      >
        <div className="w-full h-[80%] rounded-sm overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex flex-col px-0.5 ">
          {isLong ? (
            <div className="marquee-container">
              <div className="marquee">
                <span className="text-stone-400 text-sm">{props.title}</span>
                <span className="text-stone-400 text-sm">{props.title}</span>
              </div>
            </div>
          ) : (
            <h3 className="text-stone-400 text-sm">{props.title}</h3>
          )}
          <h6 className="text-stone-400 text-[0.4rem]/[0.7]">{props.release_date}</h6>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
