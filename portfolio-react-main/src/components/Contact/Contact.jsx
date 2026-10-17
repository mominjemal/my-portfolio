import React, { useState } from 'react'
import './Contact.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [charCount, setCharCount] = useState(0);

    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length > 500) {
            newErrors.message = 'Message must not exceed 500 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'message') {
            setCharCount(value.length);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const formDataToSend = new FormData(event.target);
        formDataToSend.append("access_key", "34b22ba8-5b2d-4f4a-8c48-73808b741d92");
    
        const object = Object.fromEntries(formDataToSend);
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
        
            if (res.success) {
                alert(res.message);
                // Reset form after successful submission
                setFormData({ name: '', email: '', message: '' });
                setCharCount(0);
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send a message about anything that you want me to work on. You can contact anytime</p>
                    
                    <div className="contact-detail">
                        <MdEmail className="contact-icon" />
                        <p>mominjemal@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <MdPhone className="contact-icon" />
                        <p>09131941320</p>
                    </div>
                    <div className="contact-detail">
                        <MdLocationOn className="contact-icon" />
                        <p>Addis Ababa, Ethiopia</p>
                    </div>

                    <div className="social-links">
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://github.com/mominjemal" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="https://t.me/@Bobjemal" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="social-icon" />
                        </a>
                        <a href="https://instagram.com/moma_jemal" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name" 
                            placeholder='Enter your name'
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Write your message here</label>
                        <textarea 
                            id="message"
                            name="message" 
                            rows="8"
                            placeholder='Enter your message'
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={500}
                            className={errors.message ? 'error' : ''}
                        />
                        <div className="textarea-footer">
                            {errors.message && <span className="error-message">{errors.message}</span>}
                            <span className="char-count">{charCount}/500</span>
                        </div>
                    </div>

                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;