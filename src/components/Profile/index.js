import React from 'react'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png'




export default () => {
    return (
        <Box display="flex" justifyContent="space-around" width="20%" position="fixed">
            <Box>
                <img src={avatar} alt="teste" width={100} />
            </Box>

            <Box marginTop={2}>
                <Link style={{ color: 'black', textDecoration: 'none' }} to="/profile" >Usuário</Link>
                <h6>Email</h6>
            </Box>
        </Box>
    )
}