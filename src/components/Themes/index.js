import './Themes.css'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

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
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return(
    <Checkbox {...label} icon={<NightsStayIcon sx={{ color: 'white' }}/>} checkedIcon={<WbSunnyIcon sx={{ color: 'white' }}/>} onChange={toggleTheme} />
  )
}
export default Themes