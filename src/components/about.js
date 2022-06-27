// Import React //
import React from 'react';
// Import about me image //
import author from "../img/aboutme.jpg";

const about = () => {
    return (
        <div className="container py-5 about-container">
           <div className="row text-center">
               <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img className="about-img" src={author} alt="author"></img>
                    </div>
               </div>
               <div className="col-lg-6 col-xs-12">
                    <h1 className="about">
                       About
                    </h1>
                    <h5 className="about-text">
                    I'm a Full-Stack Developer who's passionate about creating innovative web experiences. I graduated from Georgia Tech's Full Stack Coding Bootcamp in 2021 and have fallen in love with the combination of creativity and problem-solving that I have found in Web Development. Check out some of my work below!
                    </h5>
               </div>
            </div>
        </div>
    )
}

export default about
