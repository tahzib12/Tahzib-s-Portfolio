import { useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import SkillCard from './Components/SkillCard';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
     <Navbar />
     <div className='container' >
      <Home />
      <Experience />
      <SkillCard />
      <Projects />
      <Contact />
     </div>
     
    </>
  );
}

export default App;
