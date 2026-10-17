import React, { useState } from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "John Doe",
            position: "CEO at TechCorp",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped bring our vision to life."
        },
        {
            name: "Sarah Smith",
            position: "Product Manager",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            text: "Exceptional problem-solving skills and great communication throughout the project. Delivered everything on time and exceeded our expectations."
        },
        {
            name: "Michael Brown",
            position: "Startup Founder",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            text: "A truly talented developer who brings both technical skills and creative thinking to the table. Would definitely work with them again."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div id="testimonials" className="testimonials">
            <div className="testimonials-title">
                <h1>What Clients Say</h1>
            </div>
            
            <div className="testimonials-slider">
                <button className="slider-btn prev" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>
                
                <div className="testimonial-card">
                    <div className="quote-icon">
                        <FaQuoteLeft />
                    </div>
                    <p className="testimonial-text">{testimonials[currentSlide].text}</p>
                    <div className="testimonial-author">
                        <img 
                            src={testimonials[currentSlide].image} 
                            alt={testimonials[currentSlide].name} 
                            className="author-image"
                        />
                        <div className="author-info">
                            <h3>{testimonials[currentSlide].name}</h3>
                            <p>{testimonials[currentSlide].position}</p>
                        </div>
                    </div>
                </div>

                <button className="slider-btn next" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>

            <div className="slider-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Testimonials; 