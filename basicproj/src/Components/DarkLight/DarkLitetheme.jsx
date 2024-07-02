

import React from 'react'
import useLocalStorage from './LocalStorage'
import "./theme.css"

const DarkLitetheme = () => {

    const [theme,setTheme] = useLocalStorage('theme','dark')

    const handelToggleTheme = () => {
        setTheme(theme === "light" ?"dark":"light")

    }

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <h3>Hello!</h3>
        <button onClick={handelToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default DarkLitetheme
