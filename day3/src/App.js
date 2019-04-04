import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Counter from './Counter'
import TypeName from './TypeName'
import LifeCycle from './LifeCycle'

const App = (props) => (
    <div>
        <Router> 
            <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/lifecycle">LifeCycle</Link></li>
            </ul>
            <p></p>
            <Route path={'/lifecycle'} component={LifeCycle} />
        </Router>
        <Counter number={5} />
        <Counter />
        <TypeName />

    </div>

)

export default App