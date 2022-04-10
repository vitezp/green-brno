import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import { Panel } from './components/Panel'
import { Home } from './components/home'
import { Profile } from './components/Profile'
import { Events } from './components/Events'
import { Calculator } from './components/Calculator'
import {HowToHelp} from "./components/HowToHelp";
import {LightsMap} from "./streetLightsMap/components/LightsMap";

export default function App() {
  return (
    <Router>
      <div>
        <Panel />
        <div style={{ paddingTop: 80 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/howtohelp">
              <HowToHelp />
            </Route>
            <Route exact path="/lightsMap">
              <LightsMap />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
