import { CircleDot, Circle } from "lucide-react";
import { useState } from "react";

const SideBar = () => {
    const time = ["This Week", "This Month", "This Quarter", "This Year", "All Time"];
    const [timeFrame, setTimeFrame] = useState(`This Week`)
  return (
    <div className="h-full w-[15%] relative text-white">
        <div className="h-fit w-full sticky top-22 flex flex-col gap-4">
            <h1 className="uppercase text-2xl font-bold text-stone-400">Timeframe</h1>
            <div className="h-fit w-full flex flex-col gap-1">
                {
                    time.map(period => {
                        return (
                            <div
                            onClick={() => {
                                setTimeFrame(period);
                            }}
                             className={`h-10 w-full px-4 rounded flex items-center gap-4 text-md ${period == timeFrame? `bg-stone-800`: "bg-black"} hover:bg-stone-800 transition cursor-pointer`}>
                                {period === timeFrame? <CircleDot strokeWidth={3} />: <Circle color="#918C88" strokeWidth={3}/>}
                                {period}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar;