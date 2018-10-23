import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {remote, ipcRenderer} from 'electron';
const shelljs = require('shelljs-exec-proxy');

// Import the styles here to process them with webpack
import './styles.scss';

shelljs.config.execPath = '/Users/jonathan/Desktop/Development/electron';
console.log(shelljs);

const nodePath = (shelljs.which('node').toString());
shelljs.config.execPath = nodePath;
const ab = shelljs.exec('ls');

console.log(nodePath);
console.log(ab);

const a = shelljs.ls('*.js');
console.log(a);

const b = shelljs.exec('ls');
console.log(b);

const command = shelljs.exec('command', {silent:true, async:true});
command.stdout.on('data', (data:any) => {
    console.log('data');
});
command.stdout.on('finish', () => {
  console.log('finish');
});

if (!shelljs.which('git')) {
  shelljs.echo('Sorry, this script requires git');
  console.log('requires git');
}

if (a === null || a.code !== 0) {
  console.log('error');
  shelljs.echo('Error: Git commit failed');
  //shelljs.exit(1);
}

console.log('a');

ReactDOM.render(
  <div className="about-wrapper">
    <div className="side-menu about-header">
      <div className="title-bar">
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
      </div>
    </div>

    <div className="side-menu project-menu">
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
              <span className="span-label">Commit</span>
              <span className="span-label">Today
                <span className="notification-counter">1</span>
              </span>
              <span className="span-label">Yesterday</span>
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


    <div className="about-content">
      sasdss

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
