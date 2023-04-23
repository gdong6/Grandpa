import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Gallery, Comment, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black duration-500">
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

        <div className="bg-white">
          <Comment />
        </div>
        <div className="relative z-0 bg-gradient-to-b from-white to-amber-100">
            <Footer />
        </div>
        
      </div>   
    </BrowserRouter>
  )
}

export default App