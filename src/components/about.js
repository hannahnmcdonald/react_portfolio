// Import React //
import React from 'react';
// Import about me image //
import author from "../img/linkedinphoto.png";

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
                    I'm a Full-Stack Developer with a background in nursing and a life-long dedication to learning. I have extensive experience working collaboratively with multiple teams in high-pressure situations, exceptional attention to detail, and a strong ability to multitask and manage time and resources to achieve the most effective outcome. I am able to adapt to and work with varying technologies/roles and am passionate about creating quality code.
                    </h5>
               </div>
            </div>
        </div>
    )
}

export default about
