// Import React //
import React from 'react';
// Import React-Typed //
import Typed from 'react-typed';

const header = () => {
    return (
        <div className="header-wrapper">
            {/* <div id="particles-js"></div> */}
            <div className="main-info">
                <div className="header-text">
                    <h1>I'm Hannah McDonald.</h1>
                    {/* React-Typed npm package */}
                    <Typed 
                    className="typed-text"
                    strings={["I'm an Atlanta based Full-Stack Web Developer."]}
                    typeSpeed={50}
                    />
                </div>
            </div>
                {/* Particles npm package */}
                {/* <div className="particle">
                    <Particles
                    params={particles}
                    className="particles"
                    />
                </div>  */}
            {/* <div id="particles-js"></div> */}
         </div>
    )
}

export default header