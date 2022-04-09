import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Panel } from './components/Panel'

import './App.css'
import {Profile} from "./components/Profile";
import {Events} from "./components/Events";

export default function App() {
  return (
    <Router>
      <div style={{ height: '3000px' }}>
        <Panel />
        <div style={{ paddingTop: 80 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <About />
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

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}
