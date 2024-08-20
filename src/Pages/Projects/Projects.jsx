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


    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth)
      projectRef.current.style.transform = `translateX(${8}px)`
      setmovedNumber(0)
      }
      window.addEventListener("resize", handleWindowResize);
  
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
  

    const handleChange = (event) => {
      dispatch({type:event.target.checked?"on":"off"})
    }

    function moveContainer(direction){
      const position = projectRef.current.getBoundingClientRect().x-8
     if(direction === 'back' && movedNumber > 0)
      {
      
          projectRef.current.style.transform = `translateX(${position + width+8}px)`
      setmovedNumber(previouNumber => {
       return previouNumber - 1
      })
     }
     if(direction === 'forward' && movedNumber < 1 )
     {
      projectRef.current.style.transform = `translateX(${position - (width+8)}px)`
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
            <div className="project-number">{`${movedNumber+1}/2`}</div>
            <ArrowForwardIos onClick = {()=> {moveContainer('forward')}}/>
        </div>
      <ProjectsContainer darkTheme={darkTheme} projectRef={projectRef}/>
    </div>
  )
}

export default Projects
