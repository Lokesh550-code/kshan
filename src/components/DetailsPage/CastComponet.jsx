const CastComponet = ({cast}) => {
    const castArray = cast.slice(0, 6);
    console.log(castArray);
  return (
    <div className="h-fit w-full px-10 py-4 mt-10 flex flex-col items-center gap-4 border-b-2 border-t-2 border-stone-600">
        <div className="w-full">
            <h1 className="text-2xl">
                Cast
            </h1>
        </div>
        <div className="h-76 w-full felx bg-green-300">
            {/* {castArray.map((item, id) => {})} */}
        </div>
    </div>
  );
};

export default CastComponet;
