import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Panel } from './components/Panel'
import { EmbedSocialWidget } from './components/InstagramFeed/EmbedSocialWidget'

import './App.css'

const panelItems = [
  { key: 'calculator', label: 'Eko Kalkulačka' },
  { key: 'event', label: 'Akce' },
]

export default function App() {
  return (
    <Router>
      <div style={{ height: '3000px' }}>
        <Panel />
        <div style={{ paddingTop: 80 }}>
          <Switch>
            <Route exact path="/">
              <Home />
              <div id="123">
                <EmbedSocialWidget refId="d2fd508a63740c27e790196ace907ebac1fd3bb3" />
              </div>
            </Route>
            <Route exact path="/calculator">
              <About />
            </Route>
            <Route exact path="/events">
              <Users />
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

function Users() {
  return <h2>Users</h2>
}
