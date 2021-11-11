import './App.css';
// import Particles from 'react-particles-js';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Resume from "./components/resume";

function App() {
  return (
    <>
    <Navbar/>
    {/* <Particles/> */}
    <Header/>
    <About/>
    <Skills/>
    <Work/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
