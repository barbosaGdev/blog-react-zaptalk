import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png'

const useStyles = makeStyles({
    link: {
        color: 'black',
        marginTop: 20
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: 50
    }
})


export default () => {

    const classes = useStyles()

    return (
        <Box className={classes.wrapper} width={[1/3]}>
            <img src={avatar} alt="teste" width={150} />
            <Link className={classes.link} to="/profile" >
                <Typography>Acessar perfil</Typography>
            </Link>
        </Box>
    )
}