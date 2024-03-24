'use client'
import { useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  cupcake: 'cupcake',
  forest: 'forest',
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.cupcake)

  const toggleTheme = () => {
    const newTheme = theme === themes.cupcake ? themes.forest : themes.cupcake
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === 'cupcake' ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  )
}
export default ThemeToggle
