import { Search, Bell, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import SearchComponent from "./SearchComponent";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="w-full h-18 px-10 flex gap-2 bg-black fixed top-0 left-0 border border-b-stone-600 z-50">
        <div className="w-1/2 h-full flex items-center justify-start ">
          <h1 className="text-white font-semibold text-3xl">Kshan</h1>
        </div>
        <div className="w-1/2 h-full flex gap-4 items-center justify-end">
          <button
            onClick={() => {
              clickHandle();
            }}
            className="text-white cursor-pointer"
          >
            <Search size={20} />
          </button>
          <button className="text-white cursor-pointer">
            <Bell size={20} />
          </button>
          <button className="text-white cursor-pointer">
            <EllipsisVertical size={20} />
          </button>
        </div>
      </div>

      {/* <div className="w-full h-screen bg-black  z-999 opacity-85"> */}
      <SearchComponent isClicked={isClicked} />

      {/* </div> */}
    </>
  );
};

export default Navbar;
