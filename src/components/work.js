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
                        <li>Fullstack Engineer on the Formative/Summative Assessments Team, using Reactjs, Javascript/Typescript, Node, Postgres, Docker, and Kafka for multiple assessment experiences that allow learners to test their knowledge, study concepts, and prepare for certification exams</li>
                        <li>Collaborated with team in architecture and API design for assessment experiences, including writing Kafka topics & Internal Apis that surfaced data for other teams to consume</li>
                        <li>Developed library of React components commonly used across multiple Pluralsight assessment experiences, published to artifactory, and routinely released package updates for consumers using semantic release</li>
                        <li>Led project to rebuild data validation service, using SQL to write queries that ran daily as a cron job. Focus was on identifying and reporting data discrepancies through the snowflake extension to ensure accuracy and reliability of the data being processed and utilized by Pluralsight. Integrated this service with Slack to display discrepancies in the team's alerts channel for visibility and so that the team could understand and begin to debug potential issues</li>
                        <li>Utilized knowledge of WCAG 2.1 AA guidelines and screen reader testing  to ensure our assessment experiences were accessible for all users</li>
                        <li>Collaboration with other team to integrate assessment experience into video player experience as a Micro-Frontend via Webpack Module Federation</li>
                        <li>Assisted team in recruiting and hiring of new members. Served as a mentor for the team’s summer interns, fostering growth and development</li>
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