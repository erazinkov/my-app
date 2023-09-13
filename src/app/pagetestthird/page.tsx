'use client'

import { ThemeContext, themes } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

const getTheme = () => {
    if (typeof window !== "undefined") {
        const theme = `${window?.localStorage?.getItem('theme')}`
        if (Object.values(themes).includes(theme)) return theme
        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return themes.light
    }
    return themes.dark
}


export function MyComponent() {

  return (
    <div>
      Theme: 123123123
    </div>
  )
}

export default function Page() {
  const [theme, setTheme] = useState(getTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [ theme ])
  function handleClick() {
    switch (theme) {
      case "dark":
        return setTheme("light")
      case "light":
        return setTheme("dark")
      default:
        return
    }  
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <button onClick={handleClick}>Change</button>
      <MyComponent/>
    </ThemeContext.Provider>
  )
}
