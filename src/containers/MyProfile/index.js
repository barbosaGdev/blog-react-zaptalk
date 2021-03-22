import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

export default () => {
    return (
        <Box>
            <h2>My Profile page</h2>
            <Link to="/blog">Back to home</Link>
        </Box>
    )

}