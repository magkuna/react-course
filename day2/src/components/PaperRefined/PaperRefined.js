import React from 'react'

import Paper from '@material-ui/core/Paper'

const PaperRefined = (props) => (
    <Paper
    style ={{
        margin: '20px',
        padding:'20px',
  
    }}
    >
    {props.children}

    </Paper>
)
export default PaperRefined
