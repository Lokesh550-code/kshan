import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { getCurrentMonthRange } from "../../utils/dateUtils";

const TrendingBar = (props) => {
  const [open, setOpen] = useState(false);
  const [timePeriod, setTimePeriod] = useState("This Week");
  const dropDownRef = useRef(null);
  const periods = ["This Week", "This Month", "This Year", "All Time"];

  // console.log(props);

  useEffect(() => {
    const handleClickedOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", (event) => {
      handleClickedOutside(event);
    });
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);

  const monthObj = getCurrentMonthRange();
  console.log(monthObj);

  return (
    <>
      <div className="w-full h-7 flex justify-between items-start mb-4">
        <h2 className="uppercase text-white text-3xl ">trending</h2>
        <div className="relative flex flex-col items-end gap-1 transition-all">
          <button
            onClick={() => setOpen(!open)}
            className="w-36 h-8 px-[0.1rem] py-[0.01rem] text-xl flex items-center justify-center gap-1 bg-stone-900 text-white rounded-sm border-stone-800 border hover:bg-stone-800 cursor-pointer"
          >
            {timePeriod} <ChevronDown size={11} />
          </button>
          {
            <div
              ref={dropDownRef}
              className={` w-36 h-8 text-xl rounded bg-stone-900 border border-stone-800 transition-all duration-300 ${open ? "opacity-100 scale-100 pointer-events-auto z-1" : "opacity-0 scale-95 pointer-events-none -z-10"}`}
            >
              <ul className="flex flex-col gap-0.5 items-center justify-center">
                {periods.map((period) => {
                  return (
                    <li
                      onClick={() => {
                        setTimePeriod(period);
                        setOpen(false);

                        props.setPeriod(period === "This Week"? '/trending/movie/week': period === "This Month"? `/discover/movie?primary_release_date.gte=${monthObj.start}&primary_release_date.lte=${monthObj.end}&sort_by=popularity.desc`: period === "This Year"? `/discover/movie?primary_release_year=${monthObj.year}&sort_by=popularity.desc`: period == "All Time"? "/discover/movie?sort_by=popularity.desc" : "/discover/movie?sort_by=popularity.desc");
                      }}
                      className="w-full flex justify-center text-xl/[1.2] px-1 border-b border-stone-900 hover:border-stone-700 transition-colors duration-300"
                    >
                      <button className="text-white cursor-pointer">
                        {period}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default TrendingBar;