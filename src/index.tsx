import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import App from './App'
const routing = (
  <Router>
    <div>
      <Route exact path="/inq" component={App} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))