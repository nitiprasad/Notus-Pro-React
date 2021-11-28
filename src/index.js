import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import AboutUs from './views/about-us'
import Home from './views/home'
import ResearchPublications from './views/research-publications'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={AboutUs} path="/about-us" />
        <Route exact component={Home} path="/" />
        <Route
          exact
          component={ResearchPublications}
          path="/research-publications"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
