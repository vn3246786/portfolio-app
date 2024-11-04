import React, { useContext, useEffect, useRef, useState } from 'react'
import "./projects.css"
import Navbar from '../../Components/Navbar/Navbar'
import { Switch } from '@mui/material';
import { ThemeContext } from '../../ThemeContextProvider/ThemeContextProvider';
import ProjectsContainer from '../../Components/ProjectsContainer/ProjectsContainer';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Projects = () => {

    const {darkTheme,dispatch}=useContext(ThemeContext)
    const [width,setWidth]=useState(window.innerWidth)
    const projectRef= useRef()
    const [movedNumber,setmovedNumber]=useState(0) 


    
  

    const handleChange = (event) => {
      dispatch({type:event.target.checked?"on":"off"})
    }

    function moveContainer(direction){
      const position = projectRef.current.getBoundingClientRect().x-8
     if(direction === 'back' && movedNumber > 0)
      {
      
          projectRef.current.style.transform = `translateX(${position + width+10}px)`
      setmovedNumber(previouNumber => {
       return previouNumber - 1
      })
     }
     if(direction === 'forward' && movedNumber < 2 )
     {
      projectRef.current.style.transform = `translateX(${position - (width+10)}px)`
     setmovedNumber(previouNumber => {
      return previouNumber + 1
     })
    }
   }

   
  return (
    <div className='projects' style={
        {backgroundColor:darkTheme?"black":"white",
            color:darkTheme?"white":"black"
        }}>
      <Navbar darkTheme={darkTheme} page="Projects"/>
      <Switch  
      checked={darkTheme}
      onChange={handleChange}
      />
       <div className="scrollbar">
            <ArrowBackIos onClick = {()=> {moveContainer('back')}}/>
            <div className="project-number">{`${movedNumber+1}/3`}</div>
            <ArrowForwardIos onClick = {()=> {moveContainer('forward')}}/>
        </div>
      <ProjectsContainer darkTheme={darkTheme} projectRef={projectRef}/>
    </div>
  )
}

export default Projects
