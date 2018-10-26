import * as React from 'react';

export class ProjectsMenu extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="social-btns-container">
        <div className="social-btns">


          <div>
            <a className="btn plus" href="#"><i className="fa fa-plus"></i></a>
          </div>

          <div>
            <a className="btn plus" href="#"><i className="fa fa-plus"></i></a>
          </div>

          <div>
            <a className="btn plus" href="#"><i className="fa fa-plus"></i></a>
          </div>

          <div>
            <a className="btn plus" href="#"><i className="fa fa-plus"></i></a>
          </div>

          <div>
            <a className="btn plus" href="#"><i className="fa fa-plus"></i></a>
          </div>


        </div>
      </div>
    );
  }
}
