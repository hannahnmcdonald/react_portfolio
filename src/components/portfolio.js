// Import React //
import React from 'react';
// Portfolio Images //
import book from "../img/book.png"
import checkmate from "../img/profile.png"
import expanse from "../img/expanse.png"
// React-Icons //
import { GoChevronRight } from 'react-icons/go';
import { VscCode } from 'react-icons/vsc';
// import { useEffect } from 'react';
// TO DO: Restructure divs for proj to have photo first on mobile. UseEffect Hook to resize on screen change


const work = () => {

    return (
    <section id="portfolio" className="portfolio row portfolio-container-row">
        <div className="container">
  
          <div className="section-title">
            <h1>Work</h1>
          </div>

          <div className="row text-center px-5">
  
            <div className="col-lg-12 col-md-10 p-4">
              <div className="row text-center align-items-center">
                <div className="col-sm">
                  <img src={ book } className="img-fluid" alt="Book Club COllective"/>
                </div>
                <div className="col-sm desc">
                  <h4><b>Book Club Collective</b></h4>
                  <p className="desc">A full stack app where users can search for books using Google’s book API, leave reviews, and join book clubs with other readers. Book Club Collective uses a folder structure that matches the MVC paradigm as well as Node.js and Express to create a RESTful API. The site also uses MySQL and Sequelize for the database and npm star-rating.js to create a star rating system out of 5 for the book reviews and then averages them out per book.</p>
                  <p><b>Technologies: Handlebars, Node.js, MySQL, Sequelize, Express, and bcrypt.</b></p>
                  <div class="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/Book-Club-Collective" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://intense-tor-64466.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-10 p-4">
              <div className="row text-center align-items-center">
                <div className="col-sm desc">
                  <h4><b>Check Mate</b></h4>
                  <p className="desc">CheckMate is an app to keep track of your game nights with friends and family! Check Mate is a full stack application enabling a user to create a profile, add friends, and create matches with friends for board games. Users can begin game events and record the results to the participating players' individual stats, stored in a Mongo Database, and shown on their profile, along with some of their favorite games and most won or lost games. Users are able to research the stats of their friends and themselves. They can also submit and review alternate game rule sets for their favorite games and can access game specific rules and information from the Board Game Atlas API.</p>
                  <p><b>Technologies: Js, MongoDB, Apollo, GraphQL, React, MaterialUI</b></p>
                  <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/check-mate" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://check-mate-game-app.herokuapp.com/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                  </div>
                </div>
                <div className="col-sm">
                  <img src= { checkmate } className="img-fluid" alt="Check-Mate"/>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-10 p-4">
              <div className="row text-center align-items-center">
                <div className="col-sm">
                  <img src= { expanse } className="img-fluid" alt="Quiz"/>
                </div>
                <div className="col-sm desc ">
                  <h4><b>The Expanse Trivia Quiz</b></h4>
                  <p>Play this timed quiz game for the hit sci-fi series 'The Expanse.' This quiz follows questions from seasons 1-5. Test your knowledge, save your high score, and play against your friends!</p>
                  <p><b>Technologies: Vanilla Javascript, HTML, CSS</b></p>
                  <div className="portfolio-links">
                    <a href="https://github.com/hannahnmcdonald/TheExpanseTriviaQuiz/" title="Github Repo"><VscCode className="icons portfolio-icon" /></a>
                    <a href="https://hannahnmcdonald.github.io/TheExpanseTriviaQuiz/" title="Website"><GoChevronRight className="icons portfolio-icon" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default work