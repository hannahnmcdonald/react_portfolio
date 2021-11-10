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
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link">Skills</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Export Navbar //
export default navbar 
