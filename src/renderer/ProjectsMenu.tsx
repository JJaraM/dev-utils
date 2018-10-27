/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import { NavLink, Link } from "react-router-dom";

const projects = [
  {id: 1, path: "/Users/jonathan/Desktop/Development/electron"},
  {id: 2, path: "/Users/jonathan/Desktop/Development/blog/blog-microservice-post"},
  {id: 3, path: "/Users/jonathan/Desktop/Development/blog/blog.cloud"},
  {id: 4, path: "/Users/jonathan/Desktop/Development/blog/react-app"}
];



export const ProjectsMenu: React.StatelessComponent<{}> = (props) => {

  return (
    <div className="social-btns-container projects">
      <div className="social-btns">
        <div className="social-projects">
          {
            projects.map((project, i) => {
              return (
                <div id={'project-id-' + project.id} key={'project-key-' + project.id}
                  project-path={project.path}>
                  <NavLink className="btn plus" to={`/projectMenu/${project.id}`}>
                    <i className="fa fa-plus"></i>
                  </NavLink>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );

}
