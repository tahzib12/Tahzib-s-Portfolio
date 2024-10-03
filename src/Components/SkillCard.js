import React from 'react';
import './SkillCard.css'; // Import the CSS file

const skills = [
  {
    name: 'HTML',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
  },
  {
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    name: 'ReactJs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    name: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
  }
];

const SkillCard = () => {
  return (
    <>
      <div style={{ padding: "60px 0px 0px 0px" }} id="skills">
        <h1 data-aos="fade-right" data-aos-duration="1000" className='sk'>Skills :</h1>
        <div className="skill-card-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="flip-left" data-aos-duration="1000">
              <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
