"use client"
import {React, useState, useEffect} from 'react'
import Link from 'next/link'

function page() {

    const [movieList, setMovieList] = useState([])

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f0a8aeee84e5e08f193c0d04d394ff29")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(() => {
        getMovie()
    }, [])
  
    return (
    <div>

     {movieList.map((movie) => ( <a href='/route={https://api.themoviedb.org/3/movie/{movie.id}?language=en-US}'><img key={movie} alt='movies' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> </a> ))
     }

     <div>  </div>

    </div>
    
  )
}

export default page