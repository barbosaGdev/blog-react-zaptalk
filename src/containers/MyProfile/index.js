import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import avatar from '../../assets/avatar.png'


const useStyles = makeStyles({
    link: {
        color: 'black',
        textDecoration: 'none',
        marginTop: 10
    },
    paper: {
        width: 200,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default () => {

    const classes = useStyles()

    return (
        <Box display='flex' alignItems="center" flexDirection="column">
            <h2>My Profile page</h2>

            <Paper className={classes.paper}  component="div" elevation={3}>

                <img src={avatar} alt="teste" width={100} />

                <Typography>
                    Nome
                </Typography>
                <Typography>
                    Email
                </Typography>
            </Paper>
            <Link className={classes.link} to="/blog">Back to home</Link>
        </Box>
    )

}