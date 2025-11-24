
import { Movie } from "@/types/movie"

const Home = async () => {

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=1`

  try{
    const res = await fetch(url)
    if(!res.ok) throw new Error('Error fetching data')
    const data = await res.json()
    const movies: Movie[] = data.results
    console.log(movies)

  } catch(error){
    console.error(error)
    throw new Error ('Error fetching data')
  }
  return (
    <div>
      <h1>Radhe Radhe</h1>
    </div>
  )
}

export default Home

