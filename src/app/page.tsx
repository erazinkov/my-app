'use client'

import { ThemeContext, useTheme } from '@/lib/ThemeContext'


export default function Home() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const themeCurrent = theme.type === "light" ? "light" : "dark"
    console.log(themeCurrent)
    setTheme(theme.type === "light" ? { type: "dark" } : { type: "light" })
  }

  return (
    <div
      className='flex justify-center min-h-screen'
    >
      <div className='w-full flex flex-col gap-3 justify-center items-center'>
        <button className='rounded-full p-3 max-w-fit border-4' onClick={toggleTheme}>Toggle theme</button>
        <div>Try light/dark theme.</div>
      </div>
    </div>
  )
}
