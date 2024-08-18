import React, { useState } from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = ({darkTheme,page}) => {

  const navigate = useNavigate()

    const [navbarItems,setNavbarItems]= useState([
        {
        name:"About Me",
        selected:page==="About"?true:false,
        path:"/"
    },
        {
        name:"Projects",
        selected:page==="Projects"?true:false,
        path:"/projects"
    },
        {
        name:"Experience",
        selected:page==="Experience"?true:false,
        path:"/experience"
    },
])

  return (
    <div className='navbar'>
      {navbarItems.map((value,i)=>{
return <div key={i} className={`items-container-${darkTheme?"on":"off"}`}
style={{backgroundColor:value.selected?"grey":"inherit"}}
onClick={()=>navigate(value.path)}
>
    <div className="item">{value.name}</div>
</div>
      })}
    </div>
  )
}

export default Navbar
