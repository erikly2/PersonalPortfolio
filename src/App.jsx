import { BrowserRouter } from "react-router-dom";

import { Skills, Contact, Hero, Navbar, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="skill-gradient bg-cover bg-no-repeat bg-center">
          <Skills />
        </div>
        <div className="project-gradient bg-cover bg-no-repeat bg-center">
          <Works />
        </div>
        <div className="background-container">
          <div className="content">
            <Contact /> 
          </div>
        </div>
       
      </div>
    </BrowserRouter>
  )
}

export default App
