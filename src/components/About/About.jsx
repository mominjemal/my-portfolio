import React from "react"
import './About.css'
import profile_img from '../../../public/images/profile_image.jpg'

const About = () => {
    return (
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
                        <p>"I am an experienced Full-Stack Software Developer with over a decade of professional expertise spanning both client-side and server-side engineering. Throughout my career, I have had the privilege of collaborating with prestigious organizations, architecting robust end-to-end solutions that drive their success and growth."</p>
                        <p>"My passion for full-stack development is reflected not only in my comprehensive technical background across the entire stack, but also in the enthusiasm and dedication I bring to each project from conception to deployment."</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
