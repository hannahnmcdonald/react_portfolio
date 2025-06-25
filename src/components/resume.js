import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <h1>Resume</h1>
                <h6>You can view & download my resume here</h6>
                <div className="columns download">
                    <a href= "https://docs.google.com/document/d/1zfQca_sfDhWV2dMa0v8I27MNE0_DzMnfXSE0GNqITqw/edit?usp=sharing" className="button download-button">
                        <FaFileDownload className= "resume"/> Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume