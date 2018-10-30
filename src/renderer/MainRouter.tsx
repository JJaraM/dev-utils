/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { HashRouter, BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


import { PrimaryMenu } from './PrimaryMenu';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export class MainRouter extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="about-wrapper">
        <PrimaryMenu/>
        <Switch>

        </Switch>
      </div>
    );
  }
}
