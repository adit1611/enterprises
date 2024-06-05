import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import image from '../assets/enterprises.jpeg'
export function Header() {
  return (
    <>
    <div className='bg-lime-400 h-12'>
    <h2 className='text-center'>ADITYA ENTERPRISES</h2>
    </div>
    <header className='bg-gradient-to-bl from-teal-600 to-pink-400 h-16'>
    <nav className='py-2 flex'>
     <Link to="/" className="flex items-center">
     <img src={image} alt='logo' className='rounded-full h-20 mx-5 z-10 '/>
     </Link>

      <div className='bg-blue-600 bg-opacity-50 h-10 absolute left-1/3 top-16 rounded-lg'>    
       <ul className='flex gap-14 font-serif font-semibold text-lg items-center align-middle px-12 relative -left-1'>
      <li>
        <NavLink to= "/"   className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400 underline-offset-8 " : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to= "/service" className={({isActive}) =>
      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-pink-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to= "/Contact" className={({isActive}) =>
      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-pink-600"} border-b border-gray-100 hover:bg-pink-400 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to= "/about" className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-pink-600"} border-b border-gray-100 hover:bg-pink-400 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
          About
        </NavLink>
      </li>
    </ul>
    </div>
    </nav>
    </header>
    </>
  )
}

export default Header