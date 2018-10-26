import * as React from 'react';

export class ProjectsSubMenu extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
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




        </div>
      </div>
    );
  }
}
