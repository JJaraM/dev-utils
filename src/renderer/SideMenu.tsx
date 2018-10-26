import * as React from 'react';

import { WindowButtons } from './WindowButtons';
import { ProjectsMenu } from './ProjectsMenu';

export class SideMenu extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="side-menu about-header">
        <div className="title-bar">
          <WindowButtons />
          <ProjectsMenu />
        </div>
      </div>
    );
  }
}
