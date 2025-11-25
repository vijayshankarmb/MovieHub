import { Movie } from "@/types/movie"
import Link from "next/link"
import { Card } from "./ui/card"
import Image from "next/image"
import StarRatings from "./StarRatings"

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({movie}: MovieCardProps) => {

    const poster_path = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-image.png'

      const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : "N/A"

  return (
    <div  className="
    transition-all duration-300 cursor-pointer
    hover:scale-105 
    hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
    dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]
  ">
    <Link href={`/movie/${movie.id}`}>
    <Card>
        <Image 
        src={poster_path}
        alt={movie.title} 
        height={400}
        width={400}
        className="rounded-md"
        />
        <div className="flex flex-col items-center-safe justify-center">
            <h2 className="font-semibold text-lg truncate w-full">{movie.title}</h2>
            <p className="text-gray-900 dark:text-gray-100">{releaseYear}</p>
            <div>Ratings:  <StarRatings rating={movie.vote_average} /></div>
        </div>
    </Card>
    </Link>
    </div>
  )
}

export default MovieCard
