export default async function getmovie(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=f0a8aeee84e5e08f193c0d04d394ff29`)
    
    // if(!response.ok) {
    //     throw new Error("Failed to get Movie")
    // }
    return await response.json()
  }
   