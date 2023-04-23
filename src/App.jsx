import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Gallery } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black duration-300">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-white">
            <About />
        </div>
        <div className="bg-white">
            <Gallery />
        </div>

        <div className="relative z-0">
          {/* <Contact />
          <StarsCanvas /> */}
        </div>
      </div>   
    </BrowserRouter>
  )
}

export default App