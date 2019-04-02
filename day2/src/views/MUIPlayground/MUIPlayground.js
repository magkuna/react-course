import React from 'react'
import Button from '@material-ui/core/Button'

const MUIPlayground = (props) => (
    <div>
        <Button 
        variant={"contained"}
        color={"primary"}
        onClick={() => alert('Klik!')}
        >
        Primary
      </Button>
    </div>
)
export default MUIPlayground