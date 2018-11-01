/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import { Link } from "react-router-dom";
import { WindowButtons } from "./WindowButtons";

const logo = "{JJARA}"

export class PrimaryMenu extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    //localStorage.setItem('projects', JSON.stringify(projects));
    //console.log(localStorage.getItem('projects'));
    const localStorageProjects = localStorage.getItem('projects');
    let projects = [];

    if (localStorageProjects !== null) {
      projects = JSON.parse(localStorageProjects);
    }
    return (
      <div className="lateral-menu">
        <div className="side-menu about-header">
          <div className="title-bar">
            <WindowButtons />

            <div className="social-projects-cleaner">
              <div className="social-btns">
                <div className="social-projects ">
                  <Link className="btn plus" to={`/app/settings/`}>
                  <i className="fa fa-cog"></i>
                </Link>
                <small className="project-label">Settings</small>

              </div>
            </div>
          </div>

          <div className="social-btns-container projects">
            <div className="social-btns">
              <div className="social-projects">
                {
                  projects.map((project, i) => {
                    return (
                      <div id={'project-id-' + project.id} key={'project-key-' + project.id}
                        project-path={project.path}>
                        <Link className="btn plus" to={`/app/project/${project.id}`}>
                        <i className="fa fa-plus"></i>
                      </Link>
                      <small className="project-label">{project.name}</small>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="logo">
          {logo}
        </div>
      </div>
    </div>
  </div>

);
}
}
