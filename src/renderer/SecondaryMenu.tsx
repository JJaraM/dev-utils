/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { Link } from "react-router-dom";

interface Props {
  id: number;
}

export class SecondaryMenu extends React.Component<Props, any>  {

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




            <div className="sub-content">
              <div className='showHide'>
                <input type="checkbox" id="commits" defaultChecked={true}/>
                <label htmlFor="commits">
                  <span className='expand'>
                    <span className="changeArrow arrow-up">-</span>
                    <span className="changeArrow arrow-dn">+</span>
                    <span className="span-title">Changes</span>
                  </span>
                </label>




                <div className="fieldsetContainer">
                  <span className="span-label span-green-light">
                    <Link to={`/app/project/${this.props.id}/changes`}>
                        Commit
                    </Link>
                  </span>
                </div>
              </div>
            </div>


            <div className="sub-content">
              <div className='showHide'>
                <input type="checkbox" id="toggle" defaultChecked={true}/>
                <label htmlFor="toggle">
                  <span className='expand'>
                    <span className="changeArrow arrow-up">-</span>
                    <span className="changeArrow arrow-dn">+</span>
                    <span className="span-title">Change Log</span>
                  </span>
                </label>
                <div className="fieldsetContainer">
                  <span className="span-label">
                    Today
                    <span className="notification-counter">1</span>
                  </span>
                  <span className="span-label">Yesterday</span>
                </div>
              </div>
            </div>







            {/*
                      <div className="sub-content">
                        <div className='showHide'>
                          <input type="checkbox" id="commits" defaultChecked={true}/>
                          <label htmlFor="commits">
                            <span className='expand'>
                              <span className="changeArrow arrow-up">-</span>
                              <span className="changeArrow arrow-dn">+</span>
                              <span className="span-title">Commits</span>
                            </span>
                          </label>
                          <div className="fieldsetContainer">
                            <span className="span-label span-gree-dark">Commit</span>
                            <span className="span-label span-green-light">Today
                              <span className="notification-counter">1</span>
                            </span>
                            <span className="span-label span-gree-dark">Yesterday</span>
                          </div>
                        </div>
                      </div>
            */}



          </div>
        </div>
      </div>
    );
  }
}
