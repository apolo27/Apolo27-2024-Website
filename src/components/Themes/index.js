import './Themes.css'
import React,{useState, useEffect} from 'react'
import Checkbox from '@mui/material/Checkbox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const Themes = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from local storage or set default
    return sessionStorage.getItem('theme') || 'light';
  });

  const setDarkMode = () => {
    setTheme("dark")
  }
  const setLightMode = () => {
    setTheme("light")
  }
  
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);

    // Save theme to local storage
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e) =>{
    if(e.target.checked) setDarkMode();
    else setLightMode()
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return(
    <Checkbox 
      {...label} 
      icon={<NightsStayIcon sx={{ color: "white" }}/>} 
      checkedIcon={<WbSunnyIcon sx={{ color: "white" }}/>} 
      onChange={toggleTheme} 
      checked={theme==="dark"}
    />
  )
}
export default Themes