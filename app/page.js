"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { Suspense } from 'react'
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function Movie2() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0a8aeee84e5e08f193c0d04d394ff29')
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const first10Movies = movieList.slice(0, 10);

  return (
    <div className='bg-white'>
        <div className=''>
            <NavBar />
            <h5 className='text-black'>Featured Movies</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {first10Movies.map((movie) => (
                    <Suspense fallback={<div>Loading...</div>}>
                    <MovieCard className="" data-testid="movie-card" key={movie.id} movie={movie} />
                    </Suspense>
                ))}
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default Movie2;