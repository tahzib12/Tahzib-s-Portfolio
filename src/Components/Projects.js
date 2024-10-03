import React from 'react'
import Project1 from '../Assets/skills/P1.png'
import Project2 from '../Assets/skills/LITHO.png'
import Project3 from '../Assets/skills/BRC20.png'
import Project4 from '../Assets/skills/PASSWORD.png'
import Project5 from '../Assets/skills/TODO.png'
import Project6 from '../Assets/skills/weatherApp.png'
import Project7 from '../Assets/skills/team.png'
import dabloy from '../Assets/skills/dabloy.png'

const project = [
  {
    id: 1,
    image: Project1,
    title: 'DreamScreen',
    description: "Created a dynamic plateform to helps users discover new and popular movies based on genres, trending titles, or personalized recommendations.",
    demo: 'https://dream-screen.vercel.app/',
    code: 'https://github.com/tahzib12/DreamScreen'
  },
  {
    id: 2,
    image: Project2,
    title: 'Litho',
    description:  `Contributed to the development of LITHO, designed blockchain technology interface, ensuring functionalities.`,
    demo: 'https://litho-2nd.vercel.app/',
    code: 'https://github.com/tahzib12/Litho-2nd'
  },
  {
    id: 3,
    image: Project7,
    title: 'CorewebFusion',
    description:  `Designed and developed a fully customized portfolio website to showcase the company's projects, services, and expertise.`,
   demo: 'https://corewebfusion.vercel.app/',
    code: 'https://github.com/tahzib12/mindshare'
  },
  {
    id: 4,
    image: Project3,
    title: 'BRC 20',
    description: "Created a dynamic and animated website. Addinng some css animations and functionalities.",
    demo: 'https://brc-20-client.vercel.app/MeetPythUser',
    code: 'https://github.com/tahzib12/BRC20_client'
  },
  
  {
    id: 5,
    image: dabloy,
    title: 'Dabloy',
    description: `Developed the chatbot interface using Next.js, taking advantage of its server-side rendering and static site generation capabilities for better performance and SEO.`,
    demo: 'https://password-generator-hkviwb4j9-tahzibs-projects-d5956f92.vercel.app/',
    code: 'https://github.com/FictionCode00/debloy'
  },
  {
    id: 8,
    image: Project6,
    title: 'Weather App',
    description: `The app provides users with real-time weather data, including temperature, humidity, wind speed, and weather conditions.`,
    demo: 'https://weather-app-pi-nine-39.vercel.app/',
    code: 'https://github.com/tahzib12/WeatherApp'
  },
  {
    id: 6,
    image: Project4,
    title: 'Password Generator',
    description: `The app generates highly secure passwords with customizable length and character combinations, including uppercase, lowercase, numbers, and special characters.`,
    demo: 'https://password-generator-hkviwb4j9-tahzibs-projects-d5956f92.vercel.app/',
    code: 'https://github.com/tahzib12/Password-Generator'
  },
  {
    id: 7,
    image: Project5,
    title: 'Todo List',
    description: `The app allows users to add, edit, and delete tasks, helping them manage daily tasks efficiently.`,
    demo: 'https://todo-list-mocha-beta.vercel.app/',
    code: 'https://github.com/tahzib12/Todo-List'
  },
]

const Projects = () => {
  return (
    <>
      <div className='container projects mt-3' id="projects" style={{ padding: "60px 0px 30px 0px" }}>
        <h1 data-aos="fade-right" data-aos-duration="1000" className="pro">Projects :</h1>
        <div className='row d-flex justify-content-center align-items-center card-alignment'>
          {project.map((data) => (
            <div key={data.id} className='my-3 col-md-4 col-sm-6 col-lg-3 mx-4 ' data-aos="flip-left" data-aos-duration="1000">
              <div className="card bg-transparent text-light pro-card" style={{ width: "18rem", padding: "10px", boxShadow: "var(--box-shadow)", height: "435px" }}>
                <div className='img d-flex justify-content-center align-items-center'>
                  <img src={data.image} className="card-img-top" alt="images" style={{ width: "250px", height: "130px", border: "1px solid yellow", borderRadius: "5px" }} />
                </div>
                <div className="card-body text-pretty">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text ">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary ">Demo</a>
                  <a href={data.code} className="btn btn-outline-warning mx-3">Code</a>
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
