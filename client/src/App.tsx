import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { EmbedSocialWidget } from './components/InstagramFeed/EmbedSocialWidget'
import './App.css'
import { Panel } from './components/Panel'
import { Home } from './components/home'
import { Profile } from "./components/Profile";
import { Events } from "./components/Events";
import {Calculator} from "./components/Calculator";

export default function App() {
  return (
    <Router>
      <div>
        <Panel />
        <div style={{ paddingTop: 80 }}>
          <Switch>
            <Route exact path="/">
              <Home />
              <div style={{ paddingTop: 500 }}>
                <EmbedSocialWidget refId="d2fd508a63740c27e790196ace907ebac1fd3bb3" />
                <EmbedSocialWidget refId="b9efa64ea766d99bce15aa8fb11a86868a12d9bb" />
                <EmbedSocialWidget refId="8fb2685ea09277cc512dd9ac73984c2bdcded408" />
              </div>
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
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
