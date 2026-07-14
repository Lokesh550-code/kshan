import { useLenis } from "lenis/react";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SearchComponent = ({ isClicked }) => {
  const lenis = useLenis();
  const inputRef = useRef(null);

  const selection = [`All`, `Movies`, `TV Shows`, `Anime`, `People`];
  const [activeTab, setActiveTab] = useState(`All`);

  useEffect(() => {
    if (isClicked) {
      lenis?.stop();
      //   document.documentElement.style.overflow = "hidden"; used for standard application
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
    if (!isClicked) {
      lenis?.start();
      //   document.documentElement.style.overflow = "auto";
    }

    return () => {
      lenis?.start();
      //   document.documentElement.style.overflow = "auto";
    };
  }, [isClicked, lenis]);
  return (
    <div
      className={`w-full h-[60vh] border-b-2 bg-black border-stone-500 fixed flex flex-col gap-2.5 px-10 py-4 ${isClicked ? "opacity-100 z-999999" : "opacity-0 -z-3"}`}
    >
      <div
        onClick={() => inputRef.current?.focus()}
        className="h-12 w-full flex items-center justify-between gap-4 cursor-text text-white bg-stone-800 rounded-md overflow-hidden px-4"
      >
        <Search size={20} />
        <form className="h-full w-full">
          <input
            ref={inputRef}
            className="h-12 w-full bg-stone-800 outline-none focus:outline-none"
            type="text"
            placeholder="Search for Movies, Shows or Anime..."
          />
        </form>
      </div>

      <div className="w-full h-[90%] text-white">
        <div className="w-full h-[15%] flex items-center  gap-3 border-b border-stone-500">
          {selection.map((item, key) => {
            return (
              <button
                onClick={() => setActiveTab(item)}
                key={key}
                className={`h-full text-md cursor-pointer hover:text-white ${activeTab === item ? "text-white border-b-2 border-white" : "text-stone-500"} transition-all`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
