import React from 'react'
import TextField from '@material-ui/core/TextField'
//import Icon from '@material-ui/core/Icon' 



const Search = (props) => (
    <div>
        <TextField
            //<Icon id={input-with-icon-textfield} />
            value={props.searchTerm}
            onChange={props.searchTermChange}
            fullWidth={true}
        />
    </div>
)

export default Search
