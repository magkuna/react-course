import React from 'react'
import Button from '@material-ui/core/Button'
import PaperRefined from '../../components/PaperRefined'

const MUIPlayground = (props) => (
    <div>
       <PaperRefined>
            <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => alert('Klik!')}
            >
                Primary
            </Button> 
        </PaperRefined>
    </div>
)
export default MUIPlayground