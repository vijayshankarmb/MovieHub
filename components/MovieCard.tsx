import { Movie } from "@/types/movie"
import Link from "next/link"
import { Card } from "./ui/card"
import Image from "next/image"

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({movie}: MovieCardProps) => {

    const poster_path = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : '/placeholder-image.png'

      const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : "N/A"

  return (
    <div>
    <Link href={`/movie/${movie.id}`}>
    <Card>
        <Image 
        src={poster_path}
        alt={movie.title} 
        height={450}
        width={300}
        className="rounded-md"
        />
        <div>
            <h2>{movie.title}</h2>
            <p>{releaseYear}</p>
            <p>Ratings{movie.vote_average}</p>
        </div>
    </Card>
    </Link>
    </div>
  )
}

export default MovieCard
