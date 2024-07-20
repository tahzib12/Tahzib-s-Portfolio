import React from 'react'
import './Experience.css'
import codeskapelogo from '../Assets/company/file.png'
import tronlogo from '../Assets/company/tronaqua.png'

const Experience = () => {
  return (
    <>
      <div style={{ padding: "60px 0px 30px 0px" }} id="experience">
        <h1 data-aos="fade-right" data-aos-duration="1000">Experience :</h1>
      <div className="job-card" data-aos="zoom-in" data-aos-duration="1000">
        <div className="job-title">
          <img src={codeskapelogo} alt="Google Logo" className="logo" />
        </div>
        <div className="job-details">
          <h3 style={{ color: "white" }}>Software Trainee</h3>
          <p><span className="highlight">April, 2024 Present, Mohali,Punjab-INDIA</span></p>
          <p>Worked on Codeskape</p>
          <p>Worked with the Codeskape Team</p>
        </div>
      </div>
      <div className="job-card" data-aos="zoom-in" data-aos-duration="1000">
        <div className="job-title">
          <img src={tronlogo} alt="Google Logo" className="logo" />
        </div>
        <div className="job-details">
          <h3 style={{ color: "white" }}>React Frontend Developer Intern</h3>
          <p><span className="highlight">Jan, 2024 to Feb, 2024,Gujarat-INDIA</span></p>
          <p>Worked on Tron Aqua India Private Limeted</p>
          <p>Worked Remotly</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Experience