// Import React //
import React from 'react';
// Portfolio Images //
import book from "../img/book.png"
import heyo from "../img/heyo.png"
import blog from "../img/blog.png"
import checkmate from "../img/profile.png"
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
                  <p className="desc">A full stack app where users can search for books using Google’s book API, leave reviews, and join book clubs with other readers.<b>Technologies: Handlebars, Node.js, MySQL, Sequelize, Express, and bcrypt.</b></p>
                </div>
                <div class="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/Book-Club-Collective" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://intense-tor-64466.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src= { checkmate } className="img-fluid" alt="Check-Mate"/>
                <div className="portfolio-info">
                  <h4>Check Mate</h4>
                  <p>CheckMate is the app to keep track of your game nights with friends and family! <b>Technologies: Js, MongoDB, Apollo, GraphQL, React, MaterialUI</b></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/check-mate" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://check-mate-game-app.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src= { expanse } className="img-fluid" alt="Quiz"/>
                <div className="portfolio-info">
                  <h4>The Expanse Trivia Quiz</h4>
                  <p>Play this timed quiz game for the hit sci-fi series 'The Expanse.' This quiz follows questions from seasons 1-5. Test your knowledge, save your high score, and play against your friends!</p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/TheExpanseTriviaQuiz/" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://hannahnmcdonald.github.io/TheExpanseTriviaQuiz/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={ heyo } className="img-fluid" alt="Heyo"/>
                <div className="portfolio-info">
                  <h4>Heyo! Simple Strategic Moves</h4>
                  <p className="desc">An intuitive real estate app that helps home-buyers search for listings in their area by criteria and plots them on the map.<b>Technologies: Javascript, HTML, CSS, Google Maps API, Zillow API</b></p>
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
                  <p>Intuitive weather dashboard application that searches for the weather forecast by zip code & provides the 5-day forecast including temperature, humidity, wind speed, and UV index.</p>
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
                  <p className="desc">A CMS-style blog site, where developers can publish blog posts and comment on other developers’ posts. Site is deployed to Heroku. <b>Technologies: Handlebars, Sequelize, Express, MySQL, and Node.js</b></p>
                </div>
                <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/Tech-Talk" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://tech-talk-blog.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
              </div>
            </div>

  
          </div>
  
        </div>
    </section>
    )
}

export default work