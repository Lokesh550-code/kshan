const Tab = ({selection, activeTab, setActiveTab, setSearchType}) => {
  return (
    <div className="h-full w-full flex items-center  gap-3">
      {selection.map((item, key) => {
        return (
          <button
            onClick={() => {
              setActiveTab(item);
              setSearchType(
                item == "All"
                  ? "multi"
                  : item == `Movies`
                    ? `movie`
                    : item == `TV Shows`
                      ? `tv`
                      : item == `Anime`
                        ? `anime`
                        : `person`,
              );
            }}
            key={key}
            className={`h-full text-md cursor-pointer hover:text-white ${activeTab === item ? "text-white border-b-2 border-white" : "text-stone-500"} transition-all`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;