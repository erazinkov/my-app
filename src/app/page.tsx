'use client'

import { themes, useTheme } from '@/lib/ThemeContext'


export default function Home() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const themeCurrent = theme === themes.light ? themes.light : themes.dark
    console.log(themeCurrent)
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <div
      className='flex justify-center min-h-screen'
      style={{
        backgroundColor: theme?.background,
        color: theme?.color,
      }}
    >
      <div className='w-full flex flex-col gap-3 justify-center items-center'>
        <button className='rounded-full p-3 max-w-fit border-4' onClick={toggleTheme}>Toggle theme</button>
        <div>Try light/dark theme.</div>
      </div>
    </div>
  )
}
