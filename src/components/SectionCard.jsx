const SectionCard = (props) => {
  
  const isLong = props.title.length > 19;

  return (
    <div className="w-full group h-16 bg-stone-900 text-white border border-stone-800 rounded mt-2 px-2 py-1 flex items-center gap-3 cursor-pointer overflow-hidden hover:bg-stone-800 hover:border-stone-700">
      <span
        className="font-black text-transparent bg-clip-text bg-linear-to-b from-[#E2E2E2] to-[#6B6B6B] select-none leading-none"
        style={{
          fontSize: "55px",
          WebkitTextStroke: "2px rgba(255,255,255,.1)",
          letterSpacing: "-0.05em",
        }}
      >
        {props.id}
      </span>
      <div className="h-13.75 w-10 shrink-0 overflow-hidden rounded bg-green-500">
        <img
          className="h-full w-full object-cover"
          src={props.imageUrl}
          alt=""
        />
      </div>
      <div className="flex-1 min-w-0">
        {isLong == true? (
          <div className="marquee-container-two truncate">
            <div className="marquee-two">
              <span className="text-stone-400 text-base font-semibold">{props.title}</span>
              <span className="text-stone-400 text-base font-semibold">{props.title}</span>
            </div>
          </div>
        ) : (
          <h2 className="text-base group-hover:text-white text-stone-400 font-semibold">{props.title}</h2>
        )}
        <h4 className="text-[0.5rem] text-stone-400">
          {props.releaseDate} ● {props.platform}
        </h4>
        <h4 className="text-[0.6rem] text-orange-500">{props.interestedPeople > 1000000? `${props.interestedPeople/1000000} Mil`: props.interestedPeople > 1000 ?`${props.interestedPeople/1000} k`: props.interestedPeople }</h4>
      </div>
    </div>
  );
};

export default SectionCard;