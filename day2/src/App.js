import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Calculators from './views/Calculators'
import Home from './views/Home'
import DisplayName from './views/DisplayName'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculators">Calculators</Link>
          </li>
        </ul>
      </div>
      <Route exact={true} path={'/'} component={Home} />
      <Route path={'/calculators'} component={Calculators} />
      <Route path={'/display-name/:name?/:lastName?'} component={DisplayName} />
    </Router>
  )
}

export default App