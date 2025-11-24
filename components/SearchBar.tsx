"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button} from "./ui/button"
import { Input } from "./ui/input"
import { Search } from "lucide-react"

const SearchBar = () => {

  const [query, setQuery] = useState("")

  const router = useRouter()

  const handleClick = (e: React.FormEvent)=>{
    e.preventDefault()
    const trimedQuery = query.trim()
    if(!trimedQuery) return
    router.push(`/search?query=${encodeURIComponent(trimedQuery)}`)
    setQuery("")
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="flex justify-center items-center gap-2">
        <Input placeholder="Search movie..."
        value={query}
        onChange={(e)=>{
          setQuery(e.target.value)
        }}
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
        />
        <Button size="default"
        type="submit"
        >
          <span className="md:hidden"><Search className="h-4 w-4" /></span>
          <span className="hidden md:block">Search</span>
        </Button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
