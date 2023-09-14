'use client'

import { themes, useTheme } from '@/lib/ThemeContext'

export default function Home() {
  
  return (
    <div>123</div>
  )
}

// export default function Home() {
//   const { theme, setTheme } = useTheme()

//   const toggleTheme = () => {
//     setTheme(theme === themes.light ? themes.light : themes.dark)
//   }

//   return (
//     <div
//       style={{
//         backgroundColor: theme?.background,
//       }}
//     >
//       <button onClick={toggleTheme}>Toggle theme</button>
//       Try light/dark theme.
//     </div>
//   )
// }
