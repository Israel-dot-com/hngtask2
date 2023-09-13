import React from 'react';
import Image from 'next/image';

function MovieCard({ movie }) {
  return (
    <div className="flex items-center justify-center" data-testid="movie-card">
      <div className="max-w-sm bg-white border mx-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          data-testid="movie-poster"
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={500} // Adjust the width as needed
          height={500} // Adjust the height as needed
          objectFit="cover" // Use "cover" to make the image fit the container
        />
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