import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Dashboard from '../containers/DashBoard/Dashboard';
import React, {Component,  lazy, Suspense} from 'react';
import {routes} from '../routes/routes';

class App extends Component {
  render() {
    const Loading = () => <h1>Loading...</h1>

    const component = (component) => {
         return lazy(() => import(`../components/${component}/${component}`))
      }
    
    return (
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {routes.map((route, index) => {
              if (route.path !== '*') {
               if (route.path === '/') {
                  return (
                    <Route key={index} exact path={route.path} >
                      < Redirect to="/user/12" />
                    </Route>
                  )
                } else {
                  return (
                    <Route key={index} exact path={route.path} render= {({ match }) => (
                      ( 
                        <Dashboard id={match.params.id}/> 
                      )
                    )}/>
                  )
                }
              }
               else {
                return <Route key={index} path={route.path} component={component(route.component)} />
              }
            })}
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

export default App;
