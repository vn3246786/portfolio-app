import React, { useContext, useState } from 'react'
import "./about.css"
import Navbar from '../../Components/Navbar/Navbar'
import { Switch } from '@mui/material'
import AbouteMe from '../../Components/AboutMe/AbouteMe'
import { ThemeContext } from '../../ThemeContextProvider/ThemeContextProvider'

const About = () => {
    const {darkTheme,dispatch}=useContext(ThemeContext)

    const handleChange = (event) => {
      dispatch({type:event.target.checked?"on":"off"})
    
    }

  return (
    <div className='about' style={
      {backgroundColor:darkTheme?"black":"white",
          color:darkTheme?"white":"black"
      }}>
      <Navbar darkTheme={darkTheme} page="About"/>
      <Switch  
      checked={darkTheme}
      onChange={handleChange}
      />
      <AbouteMe darkTheme={darkTheme}/>
    </div>
  )
}

export default About
