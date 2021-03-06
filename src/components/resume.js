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
                    {/* TO DO: EMBED RESUME LINK */}
                    <a href= "https://drive.google.com/file/d/1HpERXzc2HvMRMPmcEDuXEmxvw6lzFznh/view?usp=sharing" className="button download-button">
                        <FaFileDownload className= "resume"/> Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default resume