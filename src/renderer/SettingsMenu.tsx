/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import { Link } from "react-router-dom";

export class SettingsMenu extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {

    const localStorageProjects = localStorage.getItem('projects');
    let projects = [];

    if (localStorageProjects !== null) {
      projects = JSON.parse(localStorageProjects);
    }

    return (
        <div className="lateral-menu-project">
          <div className="side-menu project-menu">
            <div className="search" id="main-search">
              <input type="text" className="underline-input" placeholder="Search..."/>
            </div>
            <div className="content">
              <span className="span-title">Projects</span>
              {
                projects.map((project, i) => {
                  return (
                    <Link className="span-label span-green-light" to={`/app/settings/${project.id}`}>
                        {project.name}
                    </Link>
                )
              })
            }
            </div>
            <div className="content">
              <span className="span-title">Add Project</span>
            </div>
          </div>
        </div>
      );
    }
  }
