import React, { useState } from "react";
import Scrollspy from 'react-scrollspy';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000" style={{maxWidth: "100%"}}>
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <Scrollspy
            items={['home', 'experience', 'skills', 'projects', 'contact']}
            currentClassName="is-current"
            className={`menu ${isOpen ? "open" : ""}`}
            componentTag="div"
          >
            <a href="#home" className="nav_items pad1">Home</a>
            <a href="#experience" className="nav_items pad2">Experience</a>
            <a href="#skills" className="nav_items pad2">Skills</a>
            <a href="#projects" className="nav_items pad2">Projects</a>
            <a href="#contact" className="nav_items pad2">Contact</a>
          </Scrollspy>
        </div>
      </div>
    </>
  );
};

export default Navbar;
