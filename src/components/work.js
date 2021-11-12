// Import React //
import React from 'react';
// Portfolio Images //
import book from "../img/book.png"
import heyo from "../img/heyo.png"
import blog from "../img/blog.png"
import fitness from "../img/fitness.png"
import expanse from "../img/expanse.png"
import weather from "../img/weather.png"
// React-Icons //
import { GoChevronRight } from 'react-icons/go';
import { VscCode } from 'react-icons/vsc';
// // Pop Up Box //
// import { PopupManager, Popupboxcontainer } from 'react-popupbox';

const work = () => {
    return (
    <section id="portfolio" className="portfolio section-bg">
        <div className="container">
  
          <div className="section-title">
            <h1>Work</h1>
          </div>

  
          <div className="row portfolio-container">
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={ book } className="img-fluid" alt="Book Club COllective"/>
                <div className="portfolio-info">
                  <h4>Book Club Collective</h4>
                  <p></p>
                </div>
                <div class="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/Book-Club-Collective" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://intense-tor-64466.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={ heyo } className="img-fluid" alt="Heyo"/>
                <div className="portfolio-info">
                  <h4>Heyo! Simple Strategic Moves</h4>
                  <p></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/Heyo-Simple-Strategic-Moves" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://oskwalker.github.io/Heyo-Simple-Strategic-Moves/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={ weather } className="img-fluid" alt="weather dashboard app"/>
                <div className="portfolio-info">
                  <h4>Weather Dashboard</h4>
                  <p></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/WeatherDashboard" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://hannahnmcdonald.github.io/WeatherDashboard/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={ blog } className="img-fluid" alt="Tech Blog"/>
                <div className="portfolio-info">
                  <h4>Tech Talk </h4>
                  <p></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/Tech-Talk" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://tech-talk-blog.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src= { fitness } className="img-fluid" alt="Fitness Tracker"/>
                <div className="portfolio-info">
                  <h4>Fitness Tracker</h4>
                  <p></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/FitnessFocus" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://fitness-focus.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src= { expanse } className="img-fluid" alt="Quiz"/>
                <div className="portfolio-info">
                  <h4>The Expanse Trivia Quiz</h4>
                  <p></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/TheExpanseTriviaQuiz/" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://hannahnmcdonald.github.io/TheExpanseTriviaQuiz/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
    </section>
    )
}

export default work