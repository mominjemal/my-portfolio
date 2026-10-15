import React from "react"
import  './hero.css'
import { Link } from 'react-router-dom';
import profile_img from '../../../public/images/profile_image.jpg'

const Hero = () =>{
  return(
<div id="hero" className="hero">
    <img src={profile_img} alt="" />
     <h1><span>Hi I'm Momin, </span>frontend developer based in Ethiopia.</h1>
     <div className="hero-action">
     <Link to='/contact' offset={50} smooth={true}> <div  className="hero-connect">connect with me</div></Link>
      <Link to='/projects' offset={50} smooth={true}> <div  className="hero-projects">view projects</div></Link>
     </div>
</div>

  )
}
export default Hero
