import Card from "./Card";

const Content = ({ trending }) => {
  let id = -1;
  return (
    <>
      <div className="h-fit w-[80%] text-white">
        <div className="pb-4 border-b border-stone-600 ">
          <h1 className="text-[2.2rem] font-bold uppercase mt-2">
            Trending
          </h1>
        </div>
        <div className="h-full w-full mb-5">
          {trending.map((item, key) => {
            id++;
            return (
              <Card
                key={key}
                id={id}
                title={item.title}
                name={item.name}
                media_type={item.media_type}
                release_date={item.release_date}
                vote_average={item.vote_average}
                poster_path={item.poster_path}
                image={item.image}
                first_air_date={item.first_air_date}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
