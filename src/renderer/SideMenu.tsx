/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

import { WindowButtons } from './WindowButtons';
import { ProjectsMenu } from './ProjectsMenu';


export class SideMenu extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    const logo = "{JJARA}"
    return (
      <div className="side-menu about-header">
        <div className="title-bar">
          <WindowButtons />
          <div className="social-projects-cleaner">
            <div className="social-btns">
              <div className="social-projects">
                <a className="btn plus" href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
            <ProjectsMenu  />
          </div>
          <div className="logo">
            {logo}
          </div>


        </div>
      </div>


    );
  }
}
