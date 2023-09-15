import React from 'react';
import Image from 'next/image';
// This is the Card Component and the data in it
function MovieCard({ movie }) {
  return (
    <div className="flex items-center justify-center" data-testid="movie-card">
      <div className="max-w-sm bg-white border mx-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='relative'>
            <Image
              data-testid="movie-poster"
              className="rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={500} // Adjust the width as needed
              height={500} // Adjust the height as needed
              objectFit="cover" // Use "cover" to make the image fit the container
            />
            <div className='absolute top-5 right-5 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
            </div>
          </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-testid="movie-title">
              {movie.original_title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" data-testid="movie-release-date">
            {movie.release_date}
          </p>
          <a
            href={`/movies/${movie.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Check Details
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;