const Card = (props) => {
  return (
    <>
      <div className="h-full w-full mt-4 flex justify-between items-center rounded-xl hover:bg-stone-800 transition cursor-pointer px-3">
        <div className="w-fit h-full flex items-center gap-4">
          <span
            className="w-25 flex justify-center font-black text-transparent bg-clip-text bg-linear-to-b from-[#E2E2E2] to-[#6B6B6B] select-none leading-none"
            style={{
              fontSize: "90px",
              WebkitTextStroke: "2px rgba(255,255,255,.1)",
              letterSpacing: "-0.05em",
            }}
          >
            {props.id + 1}
          </span>
          <div className="h-32 w-20 overflow-hidden rounded">
            <img
              className="object-cover"
              src={props.poster_path != undefined ? `https://image.tmdb.org/t/p/w500${props.poster_path}` : props.image}
              alt=""
            />
          </div>
          <div className="h-fit w-fit">
            <h1 className="text-2xl">{props.title || props.name}</h1>
            <p className="text-sm text-stone-400">
              {props.release_date || props.first_air_date } <span className="text-stone-500">●</span> {props.media_type}
            </p>
          </div>
        </div>
        <div className="h-fit w-fit">
          <p className="text-orange-500 text-[1.3rem]">Rating: {props.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
