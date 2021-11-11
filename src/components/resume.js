// Import React //
import React from 'react';
// Download Icon from React-Icons //
import { FaFileDownload } from 'react-icons/fa';

const resume = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <h1>Resume</h1>
                <h6>You can download a PDF of my resume here</h6>
                <div className="columns download">
                    <p>
                        {/* TO DO: EMBED RESUME LINK */}
                        <button className="resume" href= "https://docs.google.com/document/d/1CHkaG-6mMA2N7rDirFmvaa9xIG7X2dT8qJSUxdgFj6M/edit?usp=sharing" className="button download-button" download>
                            <FaFileDownload className= "resume"/> Download Resume
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default resume