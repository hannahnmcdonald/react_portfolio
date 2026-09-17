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
                    I'm a full-stack engineer at Pluralsight, where I build accessible learning tools used by over a million learners. I work across React, TypeScript, Node.js, Kafka, and Postgres, and I'm usually the one digging into shared component libraries, load testing before a big launch, or making sure things work with a screen reader. Before tech, I was an ER nurse, which makes most production incidents feel pretty chill.
                    </h5>
               </div>
            </div>
        </div>
    )
}

export default about
