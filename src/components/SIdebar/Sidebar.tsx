'use client'

import { useTheme } from "@/lib/ThemeContext"

export default function Sidebar() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        const themeCurrent = theme === "light" ? "light" : "dark"
        console.log(themeCurrent)
        setTheme(theme === "light" ?  "dark"  : "light" )
    }
    return (
        <div className="flex flex-col gap-3 align-center justify-center">
            <button className='rounded-full p-3 border-4' onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}