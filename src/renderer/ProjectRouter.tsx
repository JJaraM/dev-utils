/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { SecondaryMenu } from './SecondaryMenu';
import { PrimaryMenu } from './PrimaryMenu';
import { CurrentChanges } from './CurrentChanges';

/*
* Component used to redirect the request to the correspond component.
* @since 1.0
*/
export class ProjectRouter extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="about-wrapper">
        <PrimaryMenu/>
        <SecondaryMenu id={this.props.match.params.id} />
        <Switch>
          <Route path="/app/project/:id/changes" exact component={CurrentChanges} />
        </Switch>
      </div>
    );
  }
}
