import * as React from 'react';

const shelljs = require('shelljs-exec-proxy');
const nodePath = (shelljs.which('node').toString());
shelljs.config.execPath = nodePath;

const gitBranch = "git branch";
const dir = "/Users/jonathan/Desktop/Development/electron";
const repositoryStatus = shelljs.exec('cd ' + dir + " && " + gitBranch).valueOf().replace('*','');

export class HeaderProject extends React.Component<any, any>  {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="card-container principal-container">
        <div className="card">
          <div className="card-space">
            <div className="branch">{repositoryStatus}</div>
            <small className="path">{dir}</small>
          </div>
        </div>
      </div>
    );
  }
}
