'use client'

import React, { Dispatch, SetStateAction, useEffect } from "react"
import { createContext, useContext, useState } from "react"


type Theme = 
    | "light" 
    | "dark"

export interface ThemeContext {
    theme: Theme,
    setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContext>({
    theme: "light",
    setTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

const getTheme = () => {
    if (typeof window !== "undefined") {
        const theme = `${window?.localStorage?.getItem('theme')}`
        if (theme === "light" || theme === "dark") return theme
        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return "light"
    }
    return "dark"
}

export default function ThemeProvider({
    children
} : {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState<Theme>(getTheme)
    useEffect(() => {
        document.documentElement.dataset.theme = theme
      }, [ theme ])
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    )
}