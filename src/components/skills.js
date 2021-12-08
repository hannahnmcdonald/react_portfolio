// Import React //
import React from 'react';
// Import Skills Icons //
import {
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaReact,
    FaNpm,
    FaGitAlt,
    FaGithubSquare,
  } from "react-icons/fa";
import { 
    SiMysql, 
    SiMongodb,
    SiJquery,
    SiSequelize,
    SiGraphql,
    SiJavascript,
    SiHandlebarsdotjs,
    siMaterialui
} from "react-icons/si";

const skills = () => {
    return (
        <div className="skills-wrapper">
            <div className=" skills-container container"> 
            <h1>Skills</h1>
                <div className="row">
                    <div className="col-lg">
                        <FaHtml5 className="display-4" title="HTML5"/>
                        <FaCss3 className="display-4" title="CSS3"/>
                        <FaBootstrap className="display-4" title="Bootstrap"/>
                        <FaReact className="display-4" title="React"/>
                        <FaNpm className="display-4" title="npm"/>
                        <FaGitAlt className="display-4" title="Git"/>
                        <FaGithubSquare className="display-4" title="Github"/>
                        <SiMysql className="display-4" title="SQL"/>
                        <SiMongodb className="display-4" title="MongoDB"/>
                        <SiJquery className="display-4" title="JQuery"/>
                        <SiSequelize className="display-4" title="Sequelize"/>
                        <SiGraphql className="display-4" title="GraphQL"/>
                        <SiJavascript className="display-4" title="Javascript"/>
                        <SiHandlebarsdotjs className="display-4" title="Handlebars"/>
                        <SiMaterialui className="display-4" title="Material UI"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills