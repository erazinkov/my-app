'use client'

import Image from 'next/legacy/image'
import Logo from '@/../public/logo.svg'
import LightTheme from '@/../public/light_mode.svg'
import DarkTheme from '@/../public/dark_mode.svg'
import { useTheme } from "@/lib/ThemeContext"
import cx from 'classnames'

export default function Sidebar() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        const themeCurrent = theme === "light" ? "light" : "dark"
        console.log(themeCurrent)
        setTheme(theme === "light" ?  "dark"  : "light" )
    }

    const classNames = cx(
        "min-h-screen flex flex-col gap-3 align-center justify-between p-3",
        theme === 'light' ? 'bg-[color:var(--light-sidebar)]' : 'bg-[color:var(--dark-sidebar)]'
    )

    return (
        <div className={classNames}>
            <Image 
                src={Logo}
                alt='Logo'
            />
            <button className='rounded-full border-none' onClick={toggleTheme}>
                {theme === 'light' ?
                <Image
                    src={DarkTheme}
                    alt='ThemeDark'
                /> :
                <Image
                    src={LightTheme}
                    alt='ThemeLight'
                />
            }
            </button>
        </div>
    )
}