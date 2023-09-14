'use client'

import { createContext, useContext, useState } from "react"

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
}

export const ThemeContext = createContext({})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({
    children
} : {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState(themes.dark)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    )
}