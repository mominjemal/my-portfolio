import React from "react"
import  './About.css'
import profile_img from '../../../public/images/profile_image.jpg'

const About = () =>{
  return(
<div className="about">
    <div className="about-title">
        <h1>About me</h1>
    </div>
    <div className="about-sections">
        <div className="about-left">
        <img src={profile_img} alt="" className="about-img" />

        </div>
        <div className="about-right">
        <div className="about-para">
            <p>"I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth."</p>
            <p>"My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project."</p>
       
         </div>
        </div>
    </div>
</div>
  )
}
export default About
