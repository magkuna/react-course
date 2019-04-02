import React from 'react'

import MUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'

const AppBar = (props) => (
  <div>
    <MUIAppBar
      position={'static'}
    >
      <Toolbar>
        <IconButton
          color={'inherit'}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant={'h6'}
          color={'inherit'}
          noWrap={true}
        >
          JFDDL7 APP
        </Typography>
      </Toolbar>
    </MUIAppBar>
  </div>
)

export default AppBar