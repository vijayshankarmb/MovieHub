"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">

        <Link href="/" className="font-bold text-xl md:text-3xl">
          MovieHub
        </Link>

        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
