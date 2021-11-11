// Import React //
import React from 'react';
// Import about me image //
import author from "../img/aboutme.jpg";

const about = () => {
    return (
        <div className="container py-5 about-container">
           <div classname="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="about-img" src={author} alt="author"></img>
                    </div>
               </div>
               <div className="col-lg-6 col-xm-12">
                    <h1 className="about">
                       About
                    </h1>
                    <h6 className="about-text">
                    I'm a beginner Full-Stack Web Developer. In my spare time I like running, hiking, photography, and traveling. I started out teaching myself programming as a hobby, and I loved it immediately. I then enrolled in a Bootcamp for a more structured education so I could pursue a career in it in the future. I have learned so much from my bootcamp instructors as well as from freecodecamp, Udemy, r/LearnProgramming, and Stack Overflow. I love learning and believe that learning is a lifelong journey to improve oneself. Check out my work below!
                    </h6>
               </div>
            </div>
        </div>
    )
}

export default about
