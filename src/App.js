import { BrowserRouter } from "react-router-dom"
import { Navbar,Hero } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black duration-500">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <div className=" bg-zinc-900">
          <About />
        </div>
        <div className="bg-purple-100">
          <Gallery />
        </div>

        <div className="bg-green-100">
          <Comment />
        </div>
        <div className="relative z-0 bg-gradient-to-b from-white to-amber-100">
            <Footer />
        </div> */}
        
      </div>   
    </BrowserRouter>
  )
}

export default App