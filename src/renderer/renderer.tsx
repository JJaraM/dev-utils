/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { SideMenu } from './SideMenu';
import {ProjectsSubMenu} from './ProjectsSubMenu';
import {remote, ipcRenderer} from 'electron';
import { AppRouter } from './AppRouter';





ReactDOM.render(
  <Router>
    <div className="about-wrapper">
      <SideMenu />
      <ProjectsSubMenu />
      <AppRouter />
    </div>
  </Router>,
  document.getElementById('app')
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
