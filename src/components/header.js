// Import React //
import React from 'react';
// Import React-Typed //
import Typed from 'react-typed';
// Import Particles //
import Particles from "react-tsparticles";
import particles from '../const/particles';

const header = () => {
    return (
        <div className="header-wrapper">
            {/* <Particles
                params={particles}
                className="particles"
            /> */}
            <div className="row banner">
                <div className="main-info banner-text" id="overlay">
                    <div className="header-text responsive-headline">
                        <h1 className="responsive-headline"> I'm Hannah McDonald.</h1>

                        <Typed 
                        className="typed-text"
                        strings={["I'm an Atlanta based <b> Full-Stack Web Developer.</b>"]}
                        typeSpeed={50}
                        />
                    </div>
                    <Particles
                        params={particles}
                        className="particles"
                    />
                </div>
            </div>
         </div>
    )
}

export default header