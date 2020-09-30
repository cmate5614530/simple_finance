import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import PublicRoute from './PublicRoute';
import  '../Components/editor.css';
import Finance from '../Components/Financ';

export const history = createHistory();
class AppRouter extends React.Component {

  render() {
    return (
      <Router history={history} > 
        <div>
          <Switch>
            <PublicRoute path="/" component={Finance} exact={true} />
          </Switch>
        </div>
      </Router>
    )
  }
};
export default AppRouter;
