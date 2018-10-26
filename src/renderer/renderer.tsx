import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {remote, ipcRenderer} from 'electron';

import { WindowButtons } from './WindowButtons';
import { ProjectsMenu } from './ProjectsMenu';
import {ProjectsSubMenu} from './ProjectsSubMenu';

import 'react-gh-like-diff/lib/diff2html.min.css';
import { ReactGhLikeDiff } from 'react-gh-like-diff';

const shelljs = require('shelljs-exec-proxy');

// Import the styles here to process them with webpack
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



ReactDOM.render(
  <div className="about-wrapper">


    <div className="side-menu about-header">
      <div className="title-bar">
        <WindowButtons />
        <ProjectsMenu />
      </div>
    </div>

    <ProjectsSubMenu />


    <div className="main-content">

      <div className="main-content-container">
        <div className="card-container principal-container">
          <div className="card">
            <div className="card-space">
              <div className="branch">Trunk</div>
              <small className="path">path/jonathan</small>
            </div>
          </div>
        </div>

        <div className="card-container secondary-container">
          <div className="card-space">
            <div className="card card-radius">
              <div className="local-files">
                <div className="card-space-table-th">
                  <table>
                    <thead>
                      <th className="td-status">Status</th>
                      <th>Path</th>
                    </thead>
                  </table>
                </div>
                <div className="card-space-table">
                  <table>

                    <tbody>
                      {fileStatus.map(function(object, i) {
                        const t = object.split("	");

                        return (
                          <tr>
                            <td className="td-status">{t[0]}</td>
                            <td><small>{t[1]}</small></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="card-space-inputs">
                  <input className="form-control "/>
                  <input className="form-control description"/>
                  <button className="form-control button">Commit</button>
                </div>
              </div>

              <div className="diff-files">
                <div className="card-space diff-files-container">
                  {fileStatus.map(function(object, i) {
                    const t = object.split("	");
                    if (t[0] === '') {
                      return (<div></div>)
                    }
                    const repositoryDiff = shelljs.exec('cd ' + dir + " && " + gitDiff + " " + t[1]);
                    return (
                      <ReactGhLikeDiff diffString={repositoryDiff} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>, document.getElementById('app')
);

document.getElementById('menu-button').addEventListener('click', (event) => {
  ipcRenderer.send('display-app-menu', {
    x: event.x,
    y: event.y
  })
})

document.getElementById('minimize-button').addEventListener('click', () => {
  remote.getCurrentWindow().minimize()
})

document.getElementById('min-max-button').addEventListener('click', () => {
  const currentWindow = remote.getCurrentWindow()
  if(currentWindow.isMaximized()) {
    currentWindow.unmaximize()
  } else {
    currentWindow.maximize()
  }
})

document.getElementById('close-button').addEventListener('click', () => {
  remote.app.quit()
})
