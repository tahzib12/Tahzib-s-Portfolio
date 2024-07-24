import React,{useEffect,useRef} from 'react'
import pdf from '../resume.pdf'
import './Home.css'
import profile from '../Assets/hero/profilepic.jpeg'
import Typed from 'typed.js'

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
        strings : ["Welcome to my profile!", "My name is Tahajeeb Ansari", "I am a frontend developer."],
        typeSpeed :50,
        backSpeed :50,
        loop : true
    }
      const typed = new Typed(typedRef.current,options)
    return () => {
      typed.destroy()
    }
  }, [])
  
    return (
        <>
            <div className='container home' id="home">
                <div className='left ' data-aos="fade-up-right" data-aos-duration="1000">
                    <h1 ref={typedRef} className="typed-js-element"> </h1>
                    <a href={pdf} download="resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
                </div>
                <div className='right' data-aos="fade-up-left" data-aos-duration="1000">
                    <div className='img' >
                        <img src={profile} alt='profile_image'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home