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

export default function ThemeProvider({
    children
} : {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState<Theme>("light")
    useEffect(() => {
        document.documentElement.dataset.theme = theme
      }, [ theme ])
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    )
}