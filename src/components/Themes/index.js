import React from 'react'
import './Themes.css'
const Themes = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
  }
  
  const toggleTheme = (e) =>{
    if(e.target.checked) setDarkMode();
    else setLightMode()
  }
  
  return(
    <div>
      <input
        type="checkbox"
        onChange={toggleTheme}
      />
    </div>
  )
}
export default Themes