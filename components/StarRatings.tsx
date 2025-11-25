
import { Star } from "lucide-react"

interface StarRatingProps {
  rating?: number
}

const StarRating = ({ rating = 0 }: StarRatingProps) => {
  const stars = Math.round(rating / 2)

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < stars ? "currentColor" : "none"}
          className={i < stars ? "text-yellow-400" : "text-gray-300"}
          strokeWidth={1.5} 
        />
      ))}
      <span className="ml-1 text-sm">{(rating / 2).toFixed(1)}</span>
    </div>
  )
}

export default StarRating
