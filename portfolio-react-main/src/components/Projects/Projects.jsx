import React, { useState, useEffect } from 'react';
import './Projects.css';
import { BsArrowRight } from 'react-icons/bs';
import { FaGithub, FaExternalLinkAlt, FaHeart } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

const ProjectSkeleton = () => (
    <div className="project-card skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-stats">
            <div className="skeleton-star"></div>
            <div className="skeleton-like"></div>
        </div>
        <div className="skeleton-links">
            <div className="skeleton-link"></div>
            <div className="skeleton-link"></div>
        </div>
    </div>
);

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likes, setLikes] = useState(() => {
        const savedLikes = localStorage.getItem('projectLikes');
        return savedLikes ? JSON.parse(savedLikes) : {};
    });

    const retryFetch = () => {
        setLoading(true);
        setError(null);
        fetchProjects();
    };

    const fetchProjects = async () => {
        try {
            const response = await fetch('https://api.github.com/users/mominjemal/repos?sort=updated&per_page=6');
            if (!response.ok) throw new Error('Failed to fetch projects');
            const data = await response.json();
            
            const filteredProjects = data
                .filter(repo => !repo.fork)
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map(project => ({
                    ...project,
                    likes: likes[project.id] || 0
                }));
            
            setProjects(filteredProjects);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [likes]);

    const handleLike = (projectId) => {
        setLikes(prevLikes => {
            const newLikes = {
                ...prevLikes,
                [projectId]: (prevLikes[projectId] || 0) + 1
            };
            localStorage.setItem('projectLikes', JSON.stringify(newLikes));
            return newLikes;
        });
    };

    if (error) return (
        <div id='projects' className="projects">
            <h1>My Projects</h1>
            <div className="projects-error">
                <BiError className="error-icon" />
                <h2>Oops! Something went wrong</h2>
                <p>{error}</p>
                <button onClick={retryFetch} className="retry-button">
                    Try Again
                </button>
            </div>
        </div>
    );

    return (
        <div id='projects' className="projects">
            {/* <div className="projects-title">
                <h1>My Projects</h1>
                <div className="title-pattern"></div>
            </div> */}
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects-grid">
                    {loading ? (
                        // Show 6 skeleton cards while loading
                        [...Array(6)].map((_, index) => (
                            <ProjectSkeleton key={index} />
                        ))
                    ) : (
                        projects.map(project => (
                            <div key={project.id} className="project-card">
                                <h3>{project.name}</h3>
                                <p>{project.description || 'No description available'}</p>
                                <div className="project-stats">
                                    <span className="project-stars">⭐ {project.stargazers_count}</span>
                                    <button 
                                        className="like-button"
                                        onClick={() => handleLike(project.id)}
                                    >
                                        <FaHeart className={likes[project.id] ? 'liked' : ''} />
                                        <span>{likes[project.id] || 0}</span>
                                    </button>
                                </div>
                                <div className="project-links">
                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> Code
                                    </a>
                                    {project.homepage && (
                                        <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            
            <div className="projects-showmore">
                <p>Show more</p>
                <BsArrowRight className="arrow-icon" />
            </div>
        </div>
    );
};

export default Projects;