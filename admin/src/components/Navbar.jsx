import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%] shadow-sm border-b">
      <img
        className="w-[max(20%,100px)]"
        src={assets.logo}
        alt="Logo"
      />
      <button onClick={()=>setToken('')} className="bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition">
        Đăng xuất
      </button>
    </div>
  )
}

export default Navbar
