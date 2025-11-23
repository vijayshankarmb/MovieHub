"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

const ThemeToggle = () => {

    const {theme, setTheme, resolvedTheme} = useTheme()

  return (
    <div>

      <Button size="icon"
      onClick={()=>{
        setTheme(resolvedTheme === "light" ? "dark" : "light")
      }}
      > {resolvedTheme === "dark" ? <Sun /> : <Moon />} </Button>

    </div>
  )
}

export default ThemeToggle
