import React, { useContext } from 'react'
import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import {ThemeContext} from "../../context"


const Toggle = () => {
  
  const theme = useContext(ThemeContext);

  const handleClick = ()=> {
    theme.dispatch({type:"TOGGLE"});
  };

  return (
    <div className='t'>
        <img className="t-icon" src={Sun} alt="" />
        <img className="t-icon" src={Moon} alt="" />
        <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle