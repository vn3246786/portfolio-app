import React from 'react'
import "./projectsContainer.css"
import { useNavigate } from 'react-router-dom'
import { projects } from '../../../variables'

const ProjectsContainer = ({projectRef}) => {


  return (
    <div className='projectsContainer' ref={projectRef}> 
      {projects.map((project,i)=>{
          return <div key={i} className="container-main" style={{minWidth:`${window.innerWidth}px`}}>
         <div className="title">{project.title}</div>
         <div className="image-container">
        <img src={project.image[1]} className='image' alt="" />
        <img src={project.image[2]} className='image' alt="" />
         </div>
        <button onClick={()=>window.location.href=project.link} className='go-to'>open</button>
        <div className="label">Technology used</div>
         <div className="technology">{project.technology}</div>
         <div className="features">Features</div>
         {project.features.map((feature,i)=>{
           return <div key={i} className="feature-container">
            <li className="feature-title">{feature.title}</li>
            {feature.discription&&<li className="feature-discription">{feature.discription}</li>}
        </div>
         })}
       </div>
         })}
    </div>
  )
}

export default ProjectsContainer
