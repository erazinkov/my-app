'use client'

import { useTheme } from "@/lib/ThemeContext"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const themeCurrent = theme.type === "light" ? "light" : "dark"
    console.log(themeCurrent)
    setTheme(theme.type === "light" ? { type: "dark" } : { type: "light" })
  }
  return (
    <div className="flex gap-3 align-center min-h-screen">
      <div className="flex flex-col gap-3 align-center justify-center">
        <button className='rounded-full p-3 border-4' onClick={toggleTheme}>Toggle theme</button>
      </div>
      <div>{children}</div>
    </div>
    
  )
}
