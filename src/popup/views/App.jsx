import React, { PureComponent } from 'react'
import { HashRouter, Switch, Route } from "react-router-dom";
import RouterHeader from './header'
import Home from './Home'
import Setting from './Setting'

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <RouterHeader/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/setting" component={Setting} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
