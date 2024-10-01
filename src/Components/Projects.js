import React from 'react'
import Project1 from '../Assets/skills/P1.png'
import Project2 from '../Assets/skills/LITHO.png'
import Project3 from '../Assets/skills/BRC20.png'
import Project4 from '../Assets/skills/PASSWORD.png'
import Project5 from '../Assets/skills/TODO.png'
import Project6 from '../Assets/skills/weatherApp.png'
import Project7 from '../Assets/skills/team.png'

const project = [
  {
    id: 1,
    image: Project1,
    title: 'DreamScreen',
    description: 'This is a movie website.',
    demo: 'https://dream-screen.vercel.app/',
    code: 'https://github.com/tahzib12/DreamScreen'
  },
  {
    id: 2,
    image: Project2,
    title: 'Litho',
    description: 'This is the Blockchain Website.',
    demo: 'https://litho-2nd.vercel.app/',
    code: 'https://github.com/tahzib12/Litho-2nd'
  },
  {
    id: 3,
    image: Project3,
    title: 'BRC 20',
    description: 'This is the also a Blockchain Website.',
    demo: 'https://brc-20-client.vercel.app/MeetPythUser',
    code: 'https://github.com/tahzib12/BRC20_client'
  },
  {
    id: 4,
    image: Project7,
    title: 'My Team Portfolio',
    description: 'This is the portfolio of my team designed and developed by.',
   demo: 'https://mindshare-pi.vercel.app/',
    code: 'https://github.com/tahzib12/mindshare'
  },
  {
    id: 5,
    image: Project4,
    title: 'Password Generator',
    description: 'This is the Password generator App.',
    demo: 'https://password-generator-hkviwb4j9-tahzibs-projects-d5956f92.vercel.app/',
    code: 'https://github.com/tahzib12/Password-Generator'
  },
  {
    id: 6,
    image: Project5,
    title: 'Todo List',
    description: 'This is the Todo List App.',
    demo: 'https://todo-list-mocha-beta.vercel.app/',
    code: 'https://github.com/tahzib12/Todo-List'
  },
  {
    id: 7,
    image: Project6,
    title: 'Weather App',
    description: 'This is a Weather App.',
    demo: 'https://weather-app-pi-nine-39.vercel.app/',
    code: 'https://github.com/tahzib12/WeatherApp'
  }
]

const Projects = () => {
  return (
    <>
      <div className='container projects mt-3' id="projects" style={{ padding: "60px 0px 30px 0px" }}>
        <h1 data-aos="fade-right" data-aos-duration="1000" className="pro">Projects :</h1>
        <div className='row d-flex justify-content-center align-items-center card-alignment'>
          {project.map((data) => (
            <div key={data.id} className='my-3 col-md-4 col-sm-6 col-lg-3 mx-4 ' data-aos="flip-left" data-aos-duration="1000">
              <div className="card bg-transparent text-light pro-card" style={{ width: "18rem", padding: "10px", boxShadow: "var(--box-shadow)", height: "315px" }}>
                <div className='img d-flex justify-content-center align-items-center'>
                  <img src={data.image} className="card-img-top" alt="images" style={{ width: "250px", height: "130px", border: "1px solid yellow", borderRadius: "5px" }} />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                  <a href={data.code} className="btn btn-outline-warning ">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
        .project{
            margin-bottom: 40px !important; 
        }
          .pro {
          padding: 0px 0px 0px 15px;
            font-size: 18px;
          }
          .pro-card {
            margin: auto;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .pro {
            font-size: 24px !important;
          }
          .pro-card {
            padding: 0;
            margin: 0;
            width: 90%;
            gap: 10px;
          }
          .card-alignment {
            justify-content: space-evenly !important;
          }
        }
        @media (min-width: 901px) {
          .pro-card {
            width: 100%;
            margin: auto;
          }
        }
      `}</style>
    </>
  )
}

export default Projects
