import React from 'react'
import Image from 'next/image';
import heroImage from '../images/Poster.png';
import logoImage from '../images/Logo.png';
import searchIcon from '../images/Search.png';

export default function NavBar() {
  return (
    <div>
        <div className="relative">
      {/* Hero Image */}
      <div className="h-[45vh] relative">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 p-4">
        <div className=" flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold ml-2"><Image src={logoImage} alt="Logo" width={150} height={150} /></span>
          </div>

          {/* Search Bar */}
          <div className=" flex items-center  mx-4">
            <div className="relative">
              <input type="text" id="password" class="w-full md:w-[700px] pl-3 pr-10 py-2 border-2 border-gray-200 bg-transparent text-gray-800" placeholder="What do you want to watch?" />
              <Image
                src={searchIcon}
                alt="Search Icon"
                width={20}
                height={20}
                className="absolute right-3 top-3"
              />
            </div>
          </div>

          {/* Menu Bar */}
          <div className="flex space-x-4 px-5">
           
            <a href="#" className="text-white hover:text-blue-300 text-sm">SignIn</a>
          </div>
        </div>
      </nav>
    </div>
        
    </div>
  )
}
