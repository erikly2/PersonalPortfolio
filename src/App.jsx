import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-[#18AAE4] bg-cover bg-no-repeat bg-center">
          <Works />
        </div>
        <div className="bg-[#000000] bg-cover bg-no-repeat bg-center">
          <About />
        </div>
        {/*<Experience />
        <Tech /> put in about
        <Feedbacks /> {/*to be removed later*/}
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
