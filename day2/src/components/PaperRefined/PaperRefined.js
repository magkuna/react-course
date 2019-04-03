import React from 'react'

import Paper from '@material-ui/core/Paper'

const PaperRefined = (props) => {
  let childrenToRender = null

  if(props.doNotDisplayChildren){
    childrenToRender = null
  }else{
    childrenToRender = props.children
  }

  return (
    <Paper
      style={{
        margin: '20px',
        padding: '20px',
      }}
    >
      {childrenToRender}
    </Paper>
  )
}

export default PaperRefined
