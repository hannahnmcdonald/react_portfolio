// Import React //
import React from 'react';
import { useState, useEffect } from 'react';
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
    FaGitlab
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
        { component: <SiNestjs />, title: "Nestjs" },
      ];
    
    return (
        <div className="skills-wrapper">
            <div className=" skills-container container"> 
            <h1>Skills</h1>
                <div>
                    { hoveredTitle ? <h5>{hoveredTitle}</h5> : <h5>&nbsp;</h5> }
                </div>
                <div className="row">
                        {icons.map((icon, index) => (
                             <div
                                key={index}
                                onMouseEnter={() => setHoveredTitle(icon.title)}
                                onMouseLeave={() => setHoveredTitle("")}
                                className="display-4 col-lg"
                            >
                                {icon.component}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills