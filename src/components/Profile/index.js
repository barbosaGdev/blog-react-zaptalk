import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png'

const useStyles = makeStyles({
    link: {
        color: 'black',
        textDecoration: 'none'
    }
})


export default () => {

    const classes = useStyles()

    return (
        <Box display="flex" justifyContent="space-around" width="20%" position="fixed">
            <Box>
                <img src={avatar} alt="teste" width={100} />
            </Box>

            <Box marginTop={2}>
                <Link className={classes.link} to="/profile" >Usuário</Link>
                <h6>Email</h6>
            </Box>
        </Box>
    )
}