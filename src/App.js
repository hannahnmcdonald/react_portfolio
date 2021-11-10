import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
// TO DO //
// import Skills from "./components/skills";
// import Work from "./components/work";
// import Contact from "./components/contact";
// import Footer from "./components/footer";
// import Resume from "./components/resume";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    </>
  );
}

export default App;
