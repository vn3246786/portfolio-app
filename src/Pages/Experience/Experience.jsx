import React, { useContext } from 'react'
import "./experience.css"
import { Switch } from '@mui/material';
import { ThemeContext } from '../../ThemeContextProvider/ThemeContextProvider';
import Navbar from '../../Components/Navbar/Navbar';
import CustomizedTimeline from '../../Components/Timeline/Timeline';

const Experience = () => {


  const {darkTheme,dispatch}=useContext(ThemeContext)
  const handleChange = (event) => {
    dispatch({type:event.target.checked?"on":"off"})
  }

  return (
    <div className='experience' style={
      {backgroundColor:darkTheme?"black":"white",
          color:darkTheme?"white":"black"
      }}>
      <Navbar darkTheme={darkTheme} page="Experience"/>
      <Switch  
      checked={darkTheme}
      onChange={handleChange}
      />
      <CustomizedTimeline/>
    </div>
  )
}

export default Experience
