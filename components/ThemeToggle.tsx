"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Mark component as mounted (client-side)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Don't render on server

  return (
    <div>
      <Button
        size="icon"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  )
}

export default ThemeToggle
