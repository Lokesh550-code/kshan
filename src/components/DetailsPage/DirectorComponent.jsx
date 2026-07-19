const DirectorComponent = ({ credits }) => {
  if (!credits) {
    return null;
  }

  const director = credits.crew.find((person) => person.job === "Director");

  return (
    <div className="h-fit w-full px-10 py-4 mt-10 flex items-center gap-4 border-b-2 border-t-2 border-stone-600 ">
      <div className="h-auto w-41 rounded-sm overflow-hidden object-cover">
        <img
          src={`https://image.tmdb.org/t/p/w500/${director.profile_path}`}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl text-stone-300">Director</h1>
        <h1 className="text-xl text-stone-300">{director.name}</h1>
      </div>
    </div>
  );
};

export default DirectorComponent;
