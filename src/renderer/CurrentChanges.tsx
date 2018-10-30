/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {remote, ipcRenderer} from 'electron';

import { Link } from "react-router-dom";
import { File } from './File';
import { HeaderProject } from './HeaderProject';
import { DiffFiles } from './DiffFiles';
import { Files } from './Files';

const shelljs = require('shelljs-exec-proxy');


/*
* Component used to render the index page
* @since 1.0
*/
export class CurrentChanges extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      showComponent: false,
      fileSelection: null,
      fileStatus: []
    };

    setTimeout(() => {
      this.componentDidMount();
      this.render();
    }, 100);
  }

  componentDidMount() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const project = projects.find(item => item.id === Number(this.props.match.params.id))

    const nodePath = (shelljs.which('node').toString());
    shelljs.config.execPath = nodePath;


    const user = "git config user.name";
    const gitStatus = "git status --porcelain";

    const gitDiff = "git diff";
    const command = 'cd ' + project.path + " && " + gitStatus;


    const repositoryStatus = shelljs.exec(command);



    const fileStatus = repositoryStatus.split(/\n/);

    this.setState({fileStatus: fileStatus});
  }

  onButtonClick = (event) => {
    const className = 'tr-selection';
    const div = document.getElementById(event.target.id);

    if (div !== null) {
      const fileName = div.getAttribute('file-name');
      const trId = 'file-tr-' + fileName;

      if (this.state.fileSelection !== null) {
        const prevTrSelection = document.getElementById(this.state.fileSelection);
        if (prevTrSelection !== null) {
          prevTrSelection.classList.remove(className);
        }
      }

      const currentTrSelection = document.getElementById(trId);
      if (currentTrSelection !== null) {
        currentTrSelection.classList.add(className);
      }
      this.setState({ showComponent: true, fileName: fileName, fileSelection: trId });
    }
  }


  render() {
    //const id = this.props.match.params.id;



    const functionClick = this.onButtonClick;
    return (
      <div className="main-content">

        <div className="main-content-container">
          <HeaderProject id={this.props.match.params.id} />

          <div className="card-container secondary-container">
            <div className="card-space">
              <div className="card card-radius">

                <div className="local-files">

                  {
                    (() => {

                      if (this.state.fileStatus.length === 1) {
                        return (

                          <div className="no-outfile-container out-files ">
                            <div className="no-outfile">
                              There are not changes
                            </div>
                          </div>

                        );
                      }


                      return (
                        <div className="file-container">
                          <div className="file-container-table">
                            <div className="card-space-table-th">
                              <table className="files-table-header">
                                <thead>
                                  <tr>
                                    <th>
                                      <input type="checkbox" />
                                    </th>
                                    <th>Status</th>
                                    <th>Path</th>
                                  </tr>
                                </thead>
                              </table>
                            </div>

                            <div className="card-space-table">
                              <table className="files-table-body">
                                <tbody>
                                  <Files files={this.state.fileStatus} event={functionClick} />
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      );
                    })()
                  }



                  <div className="card-space-inputs">
                    <input className="form-control " placeholder="Summary"/>
                    <textarea className="form-control description" placeholder="Description"/>
                    <button className="form-control button">Commit</button>
                  </div>
                </div>

                {
                  (() => {
                    if (this.state.showComponent) {
                      return (
                        <DiffFiles file={this.state.fileName} comment={false}/>
                      );
                    }
                    return (<div className="no-diff">No diffs</div>);
                  })()
                }



              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
