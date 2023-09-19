'use client'

import { createContext, useEffect, useState } from "react"

export const themes = {
    dark: "light" ,
    light: "dark"
}

function getTheme() {
    if (typeof window !== "undefined") {
        const theme = `${window?.localStorage?.getItem('theme')}`
        if (Object.values(themes).includes(theme)) return theme
        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return themes.light
    }
    return themes.dark
}

export const ThemeContext = createContext({})

export default function  ThemeProvider({ children } : {children: React.ReactNode}) {
    const [theme, setTheme] = useState(getTheme)
    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
      }, [ theme ])
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    )
}