const SearchCard = (props) => {
  return (
    <div id={props.id} className="h-32 w-82 overflow-hidden rounded-md p-1 flex items-center gap-2 bg-stone-800 text-white">
        <div className="h-full w-[30%] rounded overflow-hidden">
            <img src={props.image} alt="" />
        </div>
        <div>
            <h1 className="font-semibold text-2xl">{props.title}</h1>
            <p className="text-md text-stone-500">{props.mediaType} </p>
        </div>
    </div>
  )
}

export default SearchCard;