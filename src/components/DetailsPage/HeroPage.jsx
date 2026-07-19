const HeroPage = ({ result }) => {
  const minutesFunction = (num) => {
    let hours;
    if (num > 60) {
      hours = Math.floor(num / 60);
    }
    let min = num - hours * 60;
    return `${hours}h ${min}m`;
  };

  const releaseDate = (release_date) => {
    const date = new Date(release_date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  };

  return (
    <div
      className="h-[90vh] w-full flex items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${result.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-1/2 w-full px-10 flex items-end justify-end gap-3 bg-linear-to-b from-transparent via-black/70 to-black">
        <div className="h-[89%] w-auto rounded overflow-hidden">
          <img
            className="h-full w-auto rounded-md"
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            alt=""
          />
        </div>
        <div className="h-fit w-full flex flex-col gap-3">
          <div className="w-full">
            <h1 className="text-4xl text-white">
              {result.title || result.name}
            </h1>
          </div>
          <div>
            <span className=" text-xl">
              {result.vote_average} • {minutesFunction(result.runtime)} •{" "}
              {releaseDate(result.release_date)}
            </span>
          </div>
          <div className="w-[40%] h-25 overflow-hidden text-white text-[18px] leading-5">
            <p>{result.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
