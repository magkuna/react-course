import React from 'react'

import DisplayPrefix from './DisplayPrefix'
import DisplayName from './DisplayName'
import WhatReactCanDisplay from './WhatReactCanDisplay'
import DisplayPassedName  from './DisplayPassedName'
import DisplayFirstnameAndLastname from './DisplayFirstnameAndLastname'

const App = () => (
  <div>
    <h1>Hello</h1>
    <DisplayPrefix />
    <DisplayName />
    <WhatReactCanDisplay />

    <DisplayPassedName 
        name ={'Magda'}      
    />
    <DisplayFirstnameAndLastname 
        name ={'Magda'}    
        lastName = {'Kuna'}  
    />
  </div>
)

export default App
