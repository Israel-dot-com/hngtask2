import Image from 'next/image'
import Logo from './images/Logo.png'
import Poster from "./images/Poster.png"
import Search from "./images/Search.png"

export default function Home() {


  
  return (
    <main className="bg-white min-h-screen">
      <div className="custom-background">
      <nav className="">
        <a><Image src={Logo} alt="logo" className="" /></a>

        <div> <input placeholder='What do you want to watch' />  </div>
      </nav>
      </div>
      
    </main>
  )
}
