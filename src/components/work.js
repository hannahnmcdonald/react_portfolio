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
                    <li>Built learner-facing assessment products in React, TypeScript, Node.js, Postgres, Docker, and Kafka, including criterion-referenced assessments taken by over 1.2 million learners.</li>
                    <li>Shipped a new assessment and analytics experience for a 70k-user enterprise rollout; load tested with k6 under hundreds of concurrent users and resolved Postgres read/write contention before launch.</li>
                    <li>Led incremental rollout of a question-translation pipeline integrating a third-party translation API, extending assessment content to eight locales with validation gating to prevent incomplete translations from reaching live content.</li>
                    <li>Designed internal APIs and maintained Kafka topics for cross-team analytics, and built scheduled jobs to detect and republish missed records.</li>
                    <li>Owned a shared React component library used across three assessment products, automating versioning and publishing via Semantic Release and Artifactory to eliminate duplicate implementations.</li>
                    <li>Embedded assessments as a micro-frontend in the video player using Webpack Module Federation, partnering with the video team.</li>
                    <li>Rebuilt the daily data validation service in SQL and Snowflake with automated daily Slack alerts, surfacing data issues before they reached downstream reports.</li>
                    <li>Met WCAG 2.1 AA across all assessment experiences, running screen reader audits and remediating findings.</li>
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
                        <li>Developed features and components for five applications in TypeScript and Vue.js, meeting targets for three application Go-Lives released across multiple states including Arizona, California, and Illinois.</li>
                        <li>Led documentation of all OData and SQL stored procedures across seven applications' API calls, reducing debugging time for the team.</li>
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