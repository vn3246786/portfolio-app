import React from 'react'
import "./aboutMe.css"
import { Email, PhoneInTalk } from '@mui/icons-material'
import profileImage from "../../assets/profile-image.jpg"


const AbouteMe = () => {


  return (
    <div className='aboutMe' >
      <div className="contacts-info">
        <h1>Contacts</h1>
        <div className="info">
        <PhoneInTalk/>
       <a className='link' href='tel:9588695201'>9588695201</a>
        </div>
        <div className="info">
        <Email/>
       <a className='link' href='mailto:vn3246786@gmail.com'>vn3246786@gmail.com</a>
        </div>
      </div>
<div className="profile-container">
  <div className="info-container">
    <div className="title">VIRAJ NAIK</div>
    <div className="info">
        I am a fullstack web developer skilled in modern technologies such as react, nodejs, mongodb, express etc.I am always willing to learn and adapt to new technologies
    </div>
    <button className='btn'>Download CV</button>
  </div>
      <img src={profileImage} className='image' alt="" />
</div>
    </div>
  )
}

export default AbouteMe
