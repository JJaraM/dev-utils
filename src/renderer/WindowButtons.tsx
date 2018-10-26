import * as React from 'react';

export class WindowButtons extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div id="menu-button" className="window-controls-container">
        <div id="close-button" className="close">
          <a className="closebutton" href="#">
            <span><strong>x</strong></span>
          </a>
        </div>
        <div id="minimize-button" className="minimize">
          <a className="minimizebutton" href="#">
            <span><strong>&ndash;</strong></span>
          </a>
        </div>
        <div id="min-max-button" className="zoom">
          <a className="zoombutton" href="#">
            <span><strong>+</strong></span>
          </a>
        </div>
      </div>
    );
  }
}
