import { FaInstagram } from "react-icons/fa6";
import { FaDiscord, FaWhatsapp  } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <div className="w-full h-34 px-10 flex flex-col items-center justify-center bg-stone-900 border border-t-stone-700">
            <div className="h-[50%] w-full m-0 border-b border-b-stone-700 flex items-center justify-between">
                <h1 className="text-white text-2xl">Made with Love ❤️</h1>
                <div className="flex gap-3">
                    <a className="text-white hover:text-gray-400 transition-all text-3xl" href="#"><FaInstagram /></a>
                    <a className="text-white hover:text-gray-400 transition-all text-3xl" href="#"><FaDiscord /></a>
                    <a className="text-white hover:text-gray-400 transition-all text-3xl" href="#"><FaWhatsapp /></a>
                </div>
            </div>
            <div className="h-1/2 w-full m-0 flex items-center justify-between">
                <h6 className="text-md text-stone-400 transition-all">© 2026 Men of Culture Media Pvt. Ltd.</h6>
                <div className="flex gap-2">
                    <a className="text-sm text-stone-500 hover:text-stone-300 transition-all" href="#">Advertise with Us</a>
                    <a className="text-sm text-stone-500 hover:text-stone-300 transition-all" href="#">Privacy Policy</a>
                    <a className="text-sm text-stone-500 hover:text-stone-300 transition-all" href="#">Terms of Service</a>
                    <a className="text-sm text-stone-500 hover:text-stone-300 transition-all" href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer