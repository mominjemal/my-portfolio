
import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import profile_img from "../../../public/images/profile_image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img
        src={profile_img}
        alt="Momin, Full-Stack Developer"
      />

      <h1>
        Hi, I'm Momin.
        <br />
        <span>Full-Stack Developer</span>
        <br />
        based in Ethiopia.
      </h1>

      <p className="hero-description">
        I build modern, responsive web applications from
        frontend to backend, combining clean user interfaces,
        reliable APIs, and database-driven solutions.
      </p>

      <div className="hero-action">
        <Link to="/contact">
          <div className="hero-connect">
            Let's Connect
          </div>
        </Link>

        <Link to="/projects">
          <div className="hero-projects">
            View My Projects
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
