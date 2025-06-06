// Import React //
import React from 'react';
import { useState } from 'react';
// Import Skills Icons //
import {
    FaHtml5,
    FaCss3,
    FaAws,
    FaReact,
    FaNpm,
    FaGitAlt,
    FaGithubSquare,
    FaVuejs,
    FaGitlab,
    FaYarn
  } from "react-icons/fa";
import { 
    SiMysql, 
    SiMongodb,
    SiSequelize,
    SiGraphql,
    SiJavascript,
    SiHandlebarsdotjs,
    SiMaterialui,
    SiApollographql,
    SiTypescript,
    SiExpress,
    SiDocker,
    SiApachekafka,
    SiKubernetes,
    SiPostgresql,
    SiNewrelic,
    SiSnowflake,
    SiGrafana,
    SiNestjs,
    SiStorybook,
    SiJest
} from "react-icons/si";

const Skills = () => {
    const [hoveredTitle, setHoveredTitle] = useState("");
    const icons = [
        { component: <SiMysql />, title: "MySQL" },
        { component: <SiMongodb />, title: "MongoDB" },
        { component: <SiSequelize />, title: "Sequelize" },
        { component: <SiGraphql />, title: "GraphQL" },
        { component: <SiJavascript />, title: "JavaScript" },
        { component: <SiHandlebarsdotjs />, title: "Handlebars.js" },
        { component: <SiMaterialui />, title: "Material UI" },
        { component: <SiApollographql />, title: "Apollo GraphQL" },
        { component: <SiTypescript />, title: "TypeScript" },
        { component: <FaHtml5 />, title: "HTML5" },
        { component: <FaCss3 />, title: "CSS3" },
        { component: <FaReact />, title: "React" },
        { component: <FaNpm />, title: "npm" },
        { component: <FaGitAlt />, title: "Git" },
        { component: <FaGithubSquare />, title: "GitHub" },
        { component: <FaVuejs />, title: "Vue.js" },
        { component: <SiExpress />, title: "Express" },
        { component: <SiPostgresql />, title: "Postgres" },
        { component: <SiSnowflake />, title: "Snowflake" },
        { component: <SiNewrelic />, title: "New Relic" },
        { component: <SiGrafana />, title: "Grafana" },
        { component: <SiKubernetes />, title: "Kubernetes" },
        { component: <SiDocker />, title: "Docker" },
        { component: <SiApachekafka />, title: "Kafka" },
        { component: <FaAws />, title: "AWS" },
        { component: <FaGitlab />, title: "Gitlab" },
        { component: <SiNestjs />, title: "Nest.js" },
        { component: <SiStorybook />, title: "Storybook" },
        { component: <SiJest />, title: "Jest" },
        { component: <FaYarn />, title: "Yarn" }
      ];
    
    return (
        <div className="skills-wrapper" id="skills">
            <div className=" skills-container container"> 
            <h1>Skills</h1>
            <h6>These are some of the languages, frameworks, and tools that I have experience working with.</h6>
                <div className="skill-text">
                    { hoveredTitle ? <h5 className="hover-text">{hoveredTitle}</h5> : <h5>&nbsp;</h5> }
                </div>
                <div className="row text-center">
                    {icons.map((icon, index) => (
                     <div
                        key={index}
                        onMouseEnter={() => setHoveredTitle(icon.title)}
                        onMouseLeave={() => setHoveredTitle("")}
                        className="col-4 col-sm-2 mb-3"
                    >
                <div className="display-5 d-flex justify-content-center py-2">
                     {icon.component}
                </div>
            </div>
        ))}
</div>
            </div>
        </div>
    )
}

export default Skills