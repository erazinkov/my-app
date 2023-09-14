'use client'

import React, { Dispatch, SetStateAction } from "react"
import { createContext, useContext, useState } from "react"


interface ThemeInterface {
    background: string,
    color: string,
}

export const themes = {
    light: {
        background: '#eeeeee',
        color: '#222222',
    },
    dark: {
        background: '#222222',
        color: '#eeeeee',
    },
}

interface ThemeContext {
    theme: ThemeInterface,
    setTheme: Dispatch<SetStateAction<ThemeInterface>>
}

export const ThemeContext = createContext<ThemeContext>({
    theme: themes.light,
    setTheme: () => {}
})

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