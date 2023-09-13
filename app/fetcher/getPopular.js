export default async function gettoptenmovie() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=f0a8aeee84e5e08f193c0d04d394ff29')
    if (!response.ok) {
      throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
    }
    const data = await response.json();

    const results = data.results;
    
    return results;

  }
