'use client'

import { createContext, useContext, useState } from "react"

type Theme = "light" | "dark" | "system"

const ThemeContext = createContext<Theme>("system")

const useGetTheme = () => useContext(ThemeContext)

export function MyComponent() {
  const theme = useGetTheme()

  return (
    <div>
      Theme: {theme}
    </div>
  )
}


export default function Page() {
  const [theme, setTheme] = useState<Theme>("light")
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
    <ThemeContext.Provider value={theme}>
      <button onClick={handleClick}>Change</button>
      <MyComponent/>
    </ThemeContext.Provider>
  )
}
