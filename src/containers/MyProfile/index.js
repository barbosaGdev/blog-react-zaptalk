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
        marginTop: 50
    },
    paper: {
        width: 200,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mt: {
        marginTop: 15
    }
})

export default () => {

    const classes = useStyles()

    return (
        <Box display='flex' alignItems="center" justifyContent='center' flexDirection="column" height='80vh'>
            <Paper className={classes.paper}  component="div" elevation={3}>
                <img src={avatar} alt="teste" width={100} />
                <Typography className={classes.mt}>
                    Nicolas
                </Typography>
                <Typography className={classes.mt}>
                    nicolas@kazap.com.br
                </Typography>
            </Paper>
            <Link className={classes.link} to="/blog"><Typography>Back to home</Typography></Link>
        </Box>
    )
}