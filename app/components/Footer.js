import React from 'react'
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';



export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 py-8">
  <div className="container mx-auto flex flex-col items-center">
    {/* Logos */}
    <div className="flex mb-4 space-x-4">
      <img src="../images/logo1.png"  className="h-8" />
      <img src="../images/logo2.png"  className="h-8" />
      <img src="../images/logo3.png"  className="h-8" />
      <img src="../images/logo4.png"  className="h-8" />
    </div>
    
    {/* Text Links */}
    <div className="flex mb-4 space-x-6">
      <a href="#" className="text-gray-300 hover:text-white">Conditions of Use</a>
      <a href="#" className="text-gray-300 hover:text-white">Privacy & Policy</a>
      <a href="#" className="text-gray-300 hover:text-white">Press Room</a>
    </div>

    {/* Copyright Notice */}
    <p className="text-gray-300">2023 by HNGx</p>
    
  </div>
</footer>
    </div>
  )
}
