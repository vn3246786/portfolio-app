import React from 'react'
import "./aboutMe.css"
import { Email, PhoneInTalk } from '@mui/icons-material'

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
<div className="info-container">
    <div className="title">VIRAJ NAIK</div>
    <div className="subject">I AM A WEB DEVELOPER</div>
    <div className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at voluptatum cum a ut molestias nihil. Earum mollitia obcaecati odio.
    </div>
</div>
      <img src="src\assets\react.svg" className='image' alt="" />
    </div>
  )
}

export default AbouteMe
