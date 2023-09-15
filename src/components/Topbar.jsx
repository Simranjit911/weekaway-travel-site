
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-xl">
      <div className="flex items-center">
        <BsChatSquareDots size={25} className="text-primaryDark mr-2"/>
        <p className="text-lg md:text-xl text-gray-700 font-semibold">WEEKAWAY</p>
      </div>
      <div className="flex items-center ">
        <div className="hidden md:flex px-6 items-center">
            <AiOutlineClockCircle size={20} className="text-primaryDark mr-2" />
            <p className="text-md text-gray-700">9AM-5PM</p>
        </div>
        <div className=" hidden md:flex px-6 items-center">
            <AiFillPhone size={20} className="text-primaryDark mr-2" />
            <p className="text-md text-gray-700">1-88-817-822-985</p>
        </div>
        <button className="text-sm">Get a Free Quote</button>
      </div>
    </div>
  );
};

export default Topbar;
