// Import React //
import React from 'react';
// Import React-Typed //
import Typed from 'react-typed';

const header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <div className="header-text">
                    <h1>I'm Hannah McDonald.</h1>
                    {/* React Typed npm package */}
                    <Typed 
                    className="typed-text"
                    strings={["I'm an Atlanta based Full-Stack Web Developer."]}
                    typeSpeed={50}
                    />
                </div>
            </div>
         </div>
         /* <div className="particle">
            <Particles
            params={particles}
            className="particles"
            />
         </div> */
    )
}

export default header