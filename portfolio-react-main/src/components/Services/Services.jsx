import React from "react"
import './Services.css'
import { BsArrowRight } from 'react-icons/bs'
import { 
    FaCode, 
    FaPalette, 
    FaMobileAlt, 
    FaSearch, 
    FaPencilAlt, 
    FaShareAlt 
} from 'react-icons/fa'

const servicesData = [
    {
        icon: <FaCode />,
        number: "01",
        title: "Web Development",
        description: "Creating responsive and dynamic web applications using modern technologies."
    },
    {
        icon: <FaPalette />,
        number: "02",
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user interfaces and experiences."
    },
    {
        icon: <FaMobileAlt />,
        number: "03",
        title: "Mobile Development",
        description: "Building cross-platform mobile applications."
    },
    // Add other services...
]

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <div className="title-pattern"></div>
            </div>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.number}</h3>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <div className="service-readmore">
                            <p>Read More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
