/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';

export class Settings extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (

        <div className="lateral-menu-project">
          <div className="side-menu project-menu">

            <div className="search" id="main-search">
              <input type="text" className="underline-input" placeholder="Search..."/>
            </div>

            <div className="content">
              <span className="span-title">Projects</span>
              <span className="span-label span-green-light">
                  asdasdasdasd
              </span>
              <span className="span-label span-green-light">
                  asdasdasdasd
              </span>
            </div>

            <div className="content">
              <span className="span-title">Add Project</span>

            </div>
          </div>
        </div>

{/*
        <div className="sub-content">
          <div className="main-content">

            <div className="main-content-container">


              <div className="card-container secondary-container">
                <div className="card-space">
                  <div className="card card-radius">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
*/}

      );
    }
  }
