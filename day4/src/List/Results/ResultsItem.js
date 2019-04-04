import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

const ResultsItem = ({ user }) => {
    const name = user.name.first + ' ' + user.name.last
    const email = user.email
    const picture = user.picture.thumbnail
    return (
        <ListItem
            alignItems={'flex-start'}
        >
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={picture} 
                    />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={email}
            />
        </ListItem>
    )
}

export default ResultsItem