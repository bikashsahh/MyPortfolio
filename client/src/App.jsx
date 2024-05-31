import { NavBar } from "./component/NavBar"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./component/Banner";
import  Projects  from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Net from "./component/Net";
import Education from "./component/Education";
import Introduction from "./component/Introduction";
function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Net>
      <Banner /></Net>
      
      <About/>
      <Education/>
      {/* <Projects/> */}
      <Projects></Projects>
      <Contact/>

      <Introduction/>
     {/* <Net><Education/></Net>
     <Net><Projects/></Net>
      <Net><Contact/></Net>
      <Net> <About/></Net> */}
      </div>
    
  )
}

export default App
