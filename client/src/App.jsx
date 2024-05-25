import { NavBar } from "./component/NavBar"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./component/Banner";
import { Projects } from "./component/Projects";
import About from "./component/About";
import Qualification from "./component/Qualification";
import Contact from "./component/Contact";
import AboutSection from "./component/demoAbout";
function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      {/* <AboutSection/> */}
      <Banner />
      <Projects/>
      <About/>
      <Qualification/>
      <Contact/>
      </div>
    </>
  )
}

export default App
