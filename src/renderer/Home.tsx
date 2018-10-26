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

import './styles.scss';

const nodePath = (shelljs.which('node').toString());
shelljs.config.execPath = nodePath;



const dir = "/Users/jonathan/Desktop/Development/electron";
const user = "git config user.name";
const gitStatus = "git diff --name-status";
const gitDiff = "git diff";

// const repositoryUser = shelljs.exec('cd ' + dir + " && " + user);
// console.log(repositoryUser);

const repositoryStatus = shelljs.exec('cd ' + dir + " && " + gitStatus);
const fileStatus = repositoryStatus.split(/\n/);



// const b = shelljs.exec('cd /Users/jonathan/Desktop/Development/blog/react-app && pwd && git status');
// console.log(b);


//const txt = "@@ -49,4 +49,4 @@\r\n     \"react-localize-redux\": \"^3.4.1\",\r\n     \"typescript\": \"^3.1.1\"\r\n   }\r\n-}\r\n+}a"
const txt = "diff --git a/package.json b/package.json\r\nindex 2c6a000..14ad92d 100644\r\n--- a/package.json\r\n+++ b/package.json\r\n@@ -49,4 +49,4 @@\r\n     \"react-localize-redux\": \"^3.4.1\",\r\n     \"typescript\": \"^3.1.1\"\r\n   }\r\n-}\r\n+}a";

/*
* Component used to render the index page
* @since 1.0
*/
export class Home extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      showComponent: false,
      fileSelection: null
    };
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
          console.log('prev' + prevTrSelection);
          prevTrSelection.classList.remove(className);
        }
      }

      const currentTrSelection = document.getElementById(trId);

      if (currentTrSelection !== null) {
        console.log(currentTrSelection);
        currentTrSelection.classList.add(className);
      }


      this.setState({
        showComponent: true,
        fileName: fileName,
        fileSelection: trId
      });
    }
  }


  render() {
    const functionClick = this.onButtonClick;
    return (
      <div className="main-content">

        <div className="main-content-container">
          <HeaderProject />

          <div className="card-container secondary-container">
            <div className="card-space">
              <div className="card card-radius">

                <div className="local-files">

                  <div className="card-space-table-th">
                    <table>
                      <thead>
                        <tr>
                          <th className="td-status">Status</th>
                          <th>Path</th>
                        </tr>
                      </thead>
                    </table>
                  </div>

                  <div className="card-space-table">
                    <table>
                      <tbody>
                        <Files files={fileStatus} event={functionClick}/>
                      </tbody>
                    </table>
                  </div>

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
                        <DiffFiles file={this.state.fileName}/>
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
