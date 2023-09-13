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
      <div className="h-[50vh] relative">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 bg-opacity-80 backdrop-blur-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            
            <span className="text-white text-2xl font-bold ml-2"><Image src={logoImage} alt="Logo" width={50} height={50} /></span>
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 px-4 py-2 text-gray-900 placeholder-gray-400 bg-white rounded-full focus:outline-none focus:ring focus:ring-blue-300"
              />
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
          <div className="flex space-x-4">
           
            <a href="#" className="text-white hover:text-blue-300">Sign In</a>
          </div>
        </div>
      </nav>
    </div>
        
    </div>
  )
}
