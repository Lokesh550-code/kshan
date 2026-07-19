const NoResultState = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-stone-400">
        <h2 className="text-md text-semibold">
            No Results Found.
        </h2>
        <p className="text-stone-500">
            Try another movie, Tv show, or person.
        </p>
    </div>
  ) 
}

export default NoResultState;