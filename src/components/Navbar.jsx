import { Search, Bell, EllipsisVertical } from "lucide-react"
const Navbar = () => {
  return (
    <>
        <div className="w-full h-18 px-10 flex gap-2 bg-black fixed top-0 left-0 border border-b-stone-600 z-50">
          <div className="w-1/2 h-full flex items-center justify-start ">
            <h1 className="text-white font-bold text-2xl">
              Moctale
            </h1>
          </div>
          <div className="w-1/2 h-full flex gap-4 items-center justify-end">
            <button className="text-white"><Search size={20}/></button>
            <button className="text-white"><Bell size={20}/></button>
            <button className="text-white"><EllipsisVertical size={20}/></button>
          </div>
        </div>
    </>
  )
}

export default Navbar