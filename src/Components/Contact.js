import React from 'react'
import insta from '../Assets/hero/instagram.png'
import face from '../Assets/hero/facebook.png'
import linkedin from '../Assets/hero/linkedin.png'
import git from '../Assets/hero/github.png'
import mail from '../Assets/hero/email.png'


function Contact() {
  return (
    <>
      <div className='container contact' id="contact" style={{ padding: "60px 0px 30px 0px" }}>
        <h1 data-aos="fade-right" data-aos-duration="1000">Contact :</h1>
        <style>
          {` 
             .hoverEffect{
               background-color: white;
             }
            .hoverEffect:hover{
            box-shadow: 0px 0px 10px 10px rgba(101,175,10,0.5);
            background-color: yellow;
            }

          `}
        </style>
        <div style={{ display: "flex", justifyContent: "center", padding: "5px 20px", height: "100px" }} data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.instagram.com/tech_tahzib/" style={{ padding: "5px 10px" }} ><img src={insta} alt="instalogo" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid yellow" }} className="hoverEffect" /></a>
          <a href="https://www.facebook.com/the.tahzib/" style={{ padding: "5px 10px" }}><img src={face} alt="facelogo" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid yellow" }} className="hoverEffect" /></a>
          <a href="https://www.linkedin.com/in/tahajeeb-ansari-681716230/" style={{ padding: "5px 10px" }}><img src={linkedin} alt="likedlogo" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid yellow" }} className="hoverEffect" /></a>
          <a href="https://github.com/tahzib12?tab=repositories" style={{ padding: "5px 10px" }}><img src={git} alt="gitlogo" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid yellow" }} className="hoverEffect" /></a>
          <a href="mailto:tahzib.ansari01@gmail.com" style={{ padding: "5px 10px" }}><img src={mail} alt="maillogo" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid yellow" }} className="hoverEffect" /></a>
        </div>
      </div>
    </>
  )
}

export default Contact