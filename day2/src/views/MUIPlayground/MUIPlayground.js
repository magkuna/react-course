import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const MUIPlayground = (props) => (
    <div>
        <Paper
        style={{
            margin: '20px',
            padding:'20px',
        }}
        >
            <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => alert('Klik!')}
            >
                Primary
            </Button>
        </Paper>
    </div>
)
export default MUIPlayground