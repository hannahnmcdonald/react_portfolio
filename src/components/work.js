// Import React //
import React from 'react';
// Portfolio Images //
import book from "../img/book.png"
import heyo from "../img/heyo.png"
import trail from "../img/trail.png"
import fitness from "../img/fitness.png"
import expanse from "../img/expanse.png"
import weather from "../img/weather.png"
// React-Icons //
import { GoChevronRight } from 'react-icons/go';
import { VscCode } from 'react-icons/vsc';

const work = () => {
    return (
        <div className="portfolio-wrapper"> 
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Work
                </h1>
                <div className= "image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ book } alt="Book Club Collective..." />
                        <div className="overflow"></div>
                            <GoChevronRight className="icons portfolio-icon" />
                            <VscCode className="icons portfolio-icon" />
                        <div class="portfolio-links">
                            <a href="https://github.com/hannahnmcdonald/Book-Club-Collective" title="More Details"><i class="bx bx-link"></i></a>
                            <a href="https://intense-tor-64466.herokuapp.com/" title="Website"><i class="bx bx-plus"></i></a>
                        </div>
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ heyo } alt="Heyo Simple Strategic Moves..." />
                        <div className="overflow"></div>
                            <GoChevronRight className="icons portfolio-icon" />
                            <VscCode className="icons portfolio-icon" />
                        <div class="portfolio-links portfolio-icon">
                            <a href="https://github.com/OSKWalker/Heyo-Simple-Strategic-Moves" title="More Details"><i class="bx bx-link"></i></a>
                            <a href="https://oskwalker.github.io/Heyo-Simple-Strategic-Moves/" title="Website"><i class="bx bx-plus"></i></a>
                        </div>
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ expanse } alt="The Expanse Trivia Quiz..." />
                        <div className="overflow"></div>
                            <GoChevronRight className="icons portfolio-icon" />
                            <VscCode className="icons portfolio-icon" />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ weather } alt="Weather Dashboard..." />
                        <div className="overflow"></div>
                            <GoChevronRight className="icons portfolio-icon" />
                            <VscCode className="icons portfolio-icon" />
                        <div class="portfolio-links">
                        <a href="https://github.com/hannahnmcdonald/WeatherDashboard" title="More Details"><i class="bx bx-link"></i></a>
                        <a href="https://hannahnmcdonald.github.io/WeatherDashboard/" title="Website"><i class="bx bx-plus"></i></a>
                    </div>
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ fitness } alt="Fitness Tracker..." />
                        <div className="overflow"></div>
                            <GoChevronRight className="icons portfolio-icon" />
                            <VscCode className="icons portfolio-icon" />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={ trail } alt="Trail Finder..." />
                        <div className="overflow"></div>
                            <GoChevronRight className="icons portfolio-icon" />
                            <VscCode className="icons portfolio-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default work