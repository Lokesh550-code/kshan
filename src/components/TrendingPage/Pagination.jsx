const Pagination = (props) => {
  const handleNext = () => {
    if (props.page < 10) {
      props.setPage(props.page + 1);
    }
  };

  const handlePrev = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  };
  return (
    <div className="h-40 w-full flex justify-center items-center gap-7">
      <button
        onClick={() => {
          handlePrev();
        }}
        disabled={props.page === 1}
        className={`text-xl w-28 px-1 rounded transition ${props.page === 1 ?  "bg-stone-800 hover:bg-stone-700 cursor-not-allowed" :"bg-orange-600 hover:bg-orange-700 cursor-pointer"}`}
      >
        Previous
      </button>
      <div>
        <h1 className="text-white text-2xl font-bold">{props.page}</h1>
      </div>
      <button
        onClick={() => {
          handleNext();
        }}
        disabled={props.page === 10}
        className={`text-xl w-28 px-1 rounded transition ${props.page === 10 ?  "bg-stone-800 hover:bg-stone-700 cursor-not-allowed" :"bg-orange-600 hover:bg-orange-700 cursor-pointer"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
