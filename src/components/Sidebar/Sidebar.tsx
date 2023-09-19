'use client'

import Image from 'next/legacy/image'
import Logo from '@/../public/logo.svg'
import IconLightTheme from '@/../public/light_mode.svg'
import IconDarkTheme from '@/../public/dark_mode.svg'
import IconAdd from '@/../public/add.svg'
import { useTheme } from "@/lib/ThemeContext"
import cx from 'classnames'

const IconAddSvg = ({
    color = "currentColor",
}) => {
    return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3333 18.6667C14.9357 18.6667 18.6667 14.9357 18.6667 10.3333C18.6667 5.73096 14.9357 2 10.3333 2C5.73096 2 2 5.73096 2 10.3333C2 14.9357 5.73096 18.6667 10.3333 18.6667Z" strokeMiterlimit="10"/>
        <path d="M5.41663 10H14.5833" strokeMiterlimit="10"/>
        <path d="M10 5.41666V14.5833" strokeMiterlimit="10"/>
    </svg>
    )
}

export default function Sidebar() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        const themeCurrent = theme === "light" ? "light" : "dark"
        console.log(themeCurrent)
        setTheme(theme === "light" ?  "dark"  : "light" )
    }

    const classNames = cx(
        "min-h-screen flex flex-col gap-3 align-center justify-between p-3 bg-[color:var(--secondary)]",
    )

    return (
        <div className={classNames}>
            <Image
                src={Logo}
                alt='Logo'
            />
            <button className='rounded-xl border-2 flex p-3 justify-center border-[color:var(--blue-light)]'>
                <IconAddSvg color='var(--blue-light)'/>
                {/* <Image
                    className='text-[color:var(--blue-light)]'
                    src={IconAdd}
                    alt='Add'
                /> */}
            </button>
            <button className='rounded-full border-none' onClick={toggleTheme}>
                <Image
                    src={theme === "dark" ? IconLightTheme : IconDarkTheme}
                    alt='Theme'
                />
            </button>
        </div>
    )
}