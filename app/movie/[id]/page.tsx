import Image from "next/image"
import StarRating from "@/components/StarRatings"
import { Movie } from "@/types/movie"

type Props = {
  params: Promise<{ id: string }>
}

export default async function MovieDetailsPage({ params }: Props) {
  const { id } = await params

  // API URL
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`

  let movie: Movie | null = null

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Failed to fetch movie details")

    movie = await res.json()
    console.log("Details:", movie)

  } catch (error) {
    console.error(error)
    return <h1 className="text-center mt-10 text-red-500">Error loading movie.</h1>
  }

  if (!movie) return null

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder-image.png"

  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : "N/A"

  const year = movie.release_date
    ? movie.release_date.split("-")[0]
    : "Unknown"

  return (
    <div className="max-w-5xl mx-auto p-4">

      <div className="flex flex-col md:flex-row gap-8">

        <div className="w-full md:w-1/3">
          <Image
            src={poster}
            width={500}
            height={750}
            alt={movie.title}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
 
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <p className="text-gray-400">
            {year} • {runtime}
          </p>

          <StarRating rating={movie.vote_average} />

          <div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-500 leading-relaxed">{movie.overview}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
