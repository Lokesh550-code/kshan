import SkeletonGenreComponent from "../SkeletonLoadingState/SkeletonGenreComponent";

const GenreComponet = ({ genre, origin_country, isLoading}) => {

  if(isLoading) {
    return <SkeletonGenreComponent />
  }

  return (
    <div className="h-40 w-full mt-10 px-10 py-4 flex flex-col gap-6 border-t-2 border-stone-600">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl">Genres</h1>
        </div>
        <div className="text-md flex gap-3 text-stone-300">
          {genre.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl">Origin</h1>
        </div>
        <div className="flex gap-3 text-md text-stone-300">
          {origin_country.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreComponet;
