// Import React //
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import pluralsight from '../img/pluralsight.png';
import centuri from '../img/centuri.png'

const Work = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <section id="work" className="work row work-container-row">
        <div className="container">
  
          <div className="section-title">
            <h1 className="work-h1">Work</h1>
          </div>

          <div className="row text-center px-4">
  
            <div className="col-lg-12 col-md-10 p-4">
              <div className="row text-center align-items-center">
                <div className="col-sm">
                  <img src={ pluralsight } className="img-fluid" alt="Pluralsight"/>
                </div>
                <div className="col-sm desc">
                  <h4><b>Pluralsight - Software Engineer II</b></h4>
                  <p className="desc">Remote | August 2022 - Present | Full-time</p>
                  <ul className="list">
                    <li>Built and maintained learner-facing assessment experiences using React, TypeScript, Node.js, Postgres, Docker, and Kafka, enabling users to test knowledge and prepare for certification exams.</li>
                    <li>Designed and implemented Kafka topics and internal APIs to support cross-team data consumption and analytics.</li>
                    <li>Developed and maintained a shared library of React components used across multiple assessment products; published to Artifactory and managed releases using Semantic Release.</li>
                    <li>Led the rebuild of a daily data validation service using SQL and Snowflake; integrated Slack alerts to surface discrepancies and improve data reliability.</li>
                    <li>Ensured accessibility compliance across assessment tools by applying WCAG 2.1 AA standards and conducting screen reader testing.</li>
                    <li>Collaborated with a partner team to embed assessments as a micro-frontend in the video player using Webpack Module Federation.</li>
                    <li>Practiced mob programming and test-driven development (TDD) to collaboratively architect robust solutions.</li>
                    <li>Temporarily embedded with another team to improve internal tooling, delivering enhancements that optimized developer workflows across shared services.</li>
                    <li>Mentored summer interns and supported hiring efforts to grow the team.</li>
                    </ul>
                </div>
              </div>
            </div>

          { isMobile ? (

            <div className="col-lg-12 col-md-10 p-4">
              <div className="row text-center align-items-center">
              <div className="col-sm">
                <img src= { centuri } className="img-fluid" alt="Centuri"/>
              </div>
                <div className="col-sm desc">
                  <h4><b>Centuri - Application Developer I</b></h4>
                  <p className="desc">Remote | February 2022 - August 2022 | Contract</p>
                  <ul className="list">
                        <li>Developed features and components for five applications using Typescript and Vue.js for the frontend and C#  and .NET for the API/backend</li>
                        <li>Led project to document all OData & SQL stored procedures for every API call for seven applications to make debugging more efficient</li>
                        <li>Met deadlines and targets for 3 application Go-Lives that released to multiple areas and thousands of users</li>
                        <li>Actively participated in the agile software development process by adhering to Scrum Methodology including attending daily standups, sprint planning, and retrospectives.</li>
                    </ul>
                  </div>
                </div>
              </div>

          ) : 
          
          <div className="col-lg-12 col-md-10 p-4">
              <div className="row text-center align-items-center">
                <div className="col-sm desc">
                <h4><b>Centuri - Application Developer I</b></h4>
                <p className="desc">Remote | February 2022 - August 2022 | Contract</p>
                <ul className="list">
                        <li>Developed features and components for five applications using Typescript and Vue.js for the frontend and C#  and .NET for the API/backend</li>
                        <li>Led project to document all OData & SQL stored procedures for every API call for seven applications to make debugging more efficient</li>
                        <li>Met deadlines and targets for 3 application Go-Lives that released to multiple areas and thousands of users</li>
                        <li>Actively participated in the agile software development process by adhering to Scrum Methodology including attending daily standups, sprint planning, and retrospectives.</li>
                    </ul>
                </div>
                <div className="col-sm">
                  <img src= { centuri } className="img-fluid" alt="Centuri"/>
                </div>
              </div>
            </div>
          }
            </div>
        </div>
    </section>
  )
}

export default Work