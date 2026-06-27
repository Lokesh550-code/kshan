import { Search, Bell, EllipsisVertical } from "lucide-react"
const Navbar = () => {
  return (
    <>
        <div className="w-full h-10 px-4 flex gap-2 bg-black fixed top-0 left-0 border border-b-stone-600 z-50">
          <div className="w-1/2 h-full flex items-center justify-start ">
            <h1 className="text-white font-bold">
              Moctale
            </h1>
          </div>
          <div className="w-1/2 h-full flex gap-2 items-center justify-end">
            <button className="text-white"><Search size={12}/></button>
            <button className="text-white"><Bell size={12}/></button>
            <button className="text-white"><EllipsisVertical size={12 }/></button>
          </div>
        </div>
    </>
  )
}

export default Navbar