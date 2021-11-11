// Import React //
import React from 'react'
// React Font Awesome Import //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Hamburger menu svg icon //
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        {/* TO DO: Future skills section with logos per each technology, ie: reactjs, nodejs, express... */}
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Export Navbar //
export default navbar 
