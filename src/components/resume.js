// Import React //
import React from 'react';
// Download Icon from React-Icons //
import { FaFileDownload } from 'react-icons/fa';

const resume = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <h1>Resume</h1>
                <div className="columns download">
                    <p>
                        {/* TO DO: EMBED RESUME LINK */}
                        <a href= "/" className="button download-button">
                            <FaFileDownload className= "resume"/> Download Resume
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default resume