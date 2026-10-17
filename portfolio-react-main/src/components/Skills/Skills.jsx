import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'C#', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'Git', level: 85 }
    ];

    return (
        <div id="skills" className="skills">
            <div className="skills-title">
                <h1>My Skills</h1>
            </div>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                            <div 
                                className="progress" 
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills; 