export default async function gettoptenmovie() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=f0a8aeee84e5e08f193c0d04d394ff29')
    return await response.json()
  }
