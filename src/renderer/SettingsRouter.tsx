/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { SecondaryMenu } from './SecondaryMenu';
import { PrimaryMenu } from './PrimaryMenu';
import { Settings } from './Settings';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/

export class SettingsRouter extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    console.log('SettingsRouter');
    return (
      <div className="about-wrapper">
        <PrimaryMenu/>

        <Switch>
          <Route path="/app/settings/" exact component={Settings} />
        </Switch>
      </div>
    );
  }
}
