// Import React //
import React from 'react'
// React Font Awesome Import //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Hamburger menu svg icon //
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Import React-scroll //
import { Link } from 'react-scroll';
// Import Scroll to Top npm //
import ScrollToTop from "react-scroll-to-top";
// React-Icons //
import { BsArrowUpCircle } from 'react-icons/bs';

// NAVBAR //
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            {/* Navbar Hamburger Menu for mobile responsivity */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 {/* IMPORT Font Awesome Bars SVG Icon */}
                 < FontAwesomeIcon icon = {faBars} style = {{ color: '#ffffff'}}/>
            </button>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        {/* Scroll to top option */}
                        <ScrollToTop smooth component={<BsArrowUpCircle/>} /> 
                        <li className="nav-item">
                            <Link smooth={true} to="about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="work" className="nav-link" >Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" className="nav-link" >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="resume" className="nav-link" >Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Export Navbar //
export default navbar 
