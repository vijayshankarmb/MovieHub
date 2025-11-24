"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="text-center text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <p>© 2025 MovieHub. All rights reserved.</p>

        <p>
          Powered by{" "}
          <Link
            href="https://www.themoviedb.org/"
            target="_blank"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            TMDB
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
