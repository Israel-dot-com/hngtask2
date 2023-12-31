import getMovie from "@/app/fetcher/getMovie";
import Link from "next/link";
import Image from "next/image";
import Teaser from "../../images/Teaser.svg";


// Movie info page
export default async function Moviepage({params: {id}}){
    const movie = await getMovie(id)

    const timeofmovie = movie.runtime 
      const localTime = new Date(movie.release_date);
      const hours = Math.floor(timeofmovie / 60);
      const minutes = timeofmovie % 60;
      const timeinUTC = `${hours} H ${minutes} M `
      
      const utcTimeString = localTime.toUTCString();

    return (
         <div className="bg-white min-h-screen">
            {/* Nav Bar */}
            <aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-52 md:translate-x-0 border-2 border-gray-400 border-solid">
   <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-white ">
      <ul class="space-y-20 md:space-y-10 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="fixed right-5 md:left-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ml-3 hidden md:block">MovieBox</span>
            </a>
         </li>
         <li>
            <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="fixed right-5 md:left-2 w-5 h-5 text-gray-500 transition duration-75text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ml-3 hidden md:block whitespace-nowrap">Home</span>
               
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="fixed right-5 md:left-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span class="flex-1 ml-3 hidden md:block whitespace-nowrap">Movies</span>
      
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="fixed right-5 md:left-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ml-3 hidden md:block whitespace-nowrap">TV Series</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="fixed right-5 md:left-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ml-3 hidden md:block whitespace-nowrap">Upcoming</span>
            </a>
         </li>
      </ul>
      <div id="dropdown-cta" hidden class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900 md:flex flex-col" role="alert">
         <div class="flex items-center mb-3">
            <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
               <span class="sr-only">Close</span>
               <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
               </svg>
            </button>
         </div>
         <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Play Movie Quizes and earn free tickets.
         <p className="font-thin">   50k People are playing now</p>
         </p>
         <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Start Playing</a>
      </div>
      <ul>
      <li className="mt-20 md:mt-10">
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover-bg-gray-100 dark-hover-bg-gray-700 group">
               <svg class="fixed right-5 md:left-2 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ml-3 hidden md:block whitespace-nowrap">Log out</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
{/* Movie Details */}
            <div class="p-14 bg-white sm:ml-64 text-black">
                  {/* Image Start */}
               <div className="h-[33vh] relative">
                  <Image
                     src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt={movie.title}
                     layout="fill" // This fills the surrounding div
                     objectFit="cover" // This prevents distortion and covers the div
                  />
               </div>
                  {/* Image End */}
                  {/*Experimental  */}
               <div className="flex flex-col md:flex-row">
                  {/* Left part (2/3 of the screen width) */}
                  <div className="md:w-2/3 bg-white p-4">
                        <h1 className="text-xl" data-testid="movie-title">{movie.title}</h1>
                        <h1 className="text-xl" data-testid="movie-release-date">{utcTimeString} </h1>
                        <h1 className="text-xl" > {movie.adult?`PG-18`:`PG-13`}</h1>
                        <h1 className="text-xl" data-testid="movie-runtime" > {timeofmovie} </h1>

                     <p data-testid="movie-overview">{movie.overview}</p>
                  </div>

                  {/* Right part (1/3 of the screen width) */}
                  <div className="md:w-1/3 bg-white">
                     <div className="flex flex-col p-4">
                        <button className="bg-red-900 text-white py-2 px-4 rounded-md mb-2">
                           See Showtimes
                        </button>
                        <button className="bg-pink-200 border border-solid border-red-950 text-white py-2 px-4 rounded-md mb-2">
                           More Watch Options
                        </button>

                        <div className="relative pt-10">
                           <Image className="" src={Teaser} alt="Teaser"
                           objectFit="cover"
                                 
                           />
                        </div>
                     </div>
                  </div>
               </div>
               {/* experimental */}
            </div>
         </div>
    )
}
