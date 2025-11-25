
import { Movie } from "@/types/movie"
import MovieCard from "@/components/MovieCard"

const Home = async () => {

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=1`

  let movies: Movie[] = []

  try{
    const res = await fetch(url)
    if(!res.ok) throw new Error('Error fetching data')
    const data = await res.json()
    movies = data.results

  } catch(error){
    console.error(error)
    throw new Error ('Error fetching data')
  }
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl -mt-2 border-b pb-3">Popular Movies</h1>
      <div className="px-1 py-2 mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {
          movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default Home

