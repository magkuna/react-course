import React from 'react'
import Button from '@material-ui/core/Button'
import PaperRefined from '../../components/PaperRefined'

const MUIPlayground = (props) => (
    <div>
       <PaperRefined
         doNotDisplayChildren={false}
       >
            <Button
                variant={"contained"}
                color={"secondary"}
                onClick={() => alert('Klik!')}
            >
               Buttonek
            </Button> 
        </PaperRefined>
    </div>
)
export default MUIPlayground