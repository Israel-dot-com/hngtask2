import Image from 'next/image';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';



export default function Footer() {
  return (
    <div>
        <footer className="bg-white py-20 pt-40 ">
  <div className="container mx-auto flex flex-col items-center">
    {/* Logos */}
   <div className="flex mb-4 space-x-10 z-10">
      <div className="h-8">
        <Image src={logo4} alt="Logo 1" width={32} height={32} />
      </div>
      <div className="h-8">
        <Image src={logo3} alt="Logo 1" width={32} height={32} />
      </div>
      <div className="h-8">
        <Image src={logo2} alt="Logo 1" width={32} height={32} />
      </div>
      <div className="h-8">
        <Image src={logo1} alt="Logo 1" width={32} height={32} />
      </div>
    </div>
    
    {/* Text Links */}
    <div className="flex mb-4 md:space-x-6">
      <a href="#" className="text-blue-900 hover:text-white">Conditions of Use</a>
      <a href="#" className="text-blue-900 hover:text-white">Privacy & Policy</a>
      <a href="#" className="text-blue-900 hover:text-white">Press Room</a>
    </div>

    {/* Copyright Notice */}
    <p className="text-gray-300">2023 by HNGx</p>
    
  </div>
</footer>
    </div>
  )
}
