import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topice from './topics'
export default class Home extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Route path='/' component={Main}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/topics' component={Topice}></Route>
        </div>
      </HashRouter>
    )
  }
}
