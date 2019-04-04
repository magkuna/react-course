import React from 'react'
import TextField from '@material-ui/core/TextField'
//import Icon from '@material-ui/core/Icon' 



class Search extends React.Component {
  
    render() {
        return (
            <div>
                <TextField
                    //<Icon id={input-with-icon-textfield} />
                    value={this.props.searchTerm}
                    onChange={this.props.searchTermChange}
                    fullWidth={true}
                />
            </div>
        )
    }
}

export default Search
