/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

const shelljs = require('shelljs-exec-proxy');
const nodePath = (shelljs.which('node').toString());
shelljs.config.execPath = nodePath;



interface Props {
  id: number;
}

export class HeaderProject extends React.Component<Props, any>  {

  constructor(props:Props) {
    super(props);
  }

  render() {

    const projects = JSON.parse(localStorage.getItem('projects'));
    const project = projects.find(item => item.id === Number(this.props.id))


    const branchCommand = "git branch";
    const branch = shelljs.exec('cd ' + project.path + " && " + branchCommand).valueOf().replace('*','');


    return (
      <div className="card-container principal-container">
        <div className="card">
          <div className="card-space">
            <div className="branch">{branch}</div>
            <small className="path">{project.path}</small>
          </div>
        </div>
      </div>
    );
  }
}
