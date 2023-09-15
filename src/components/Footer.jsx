
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div id='about'>
         <div className="flex items-center justify-center border-t-2 py-2">
        <BsChatSquareDots size={20} className="text-primaryDark mr-2"/>
        <p className="text-md md:text-md text-gray-700 font-semibold">WEEKAWAY</p>
      </div>
      <div className='text-center '>&copy;2023 Weekaway.com USA,Inc.All rights reserved.</div>
    </div>
  )
}

export default Footer