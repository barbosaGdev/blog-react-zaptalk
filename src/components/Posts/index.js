import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { CardContent, CardMedia } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { articlesQueries } from '../../graphql/queries'

const useStyles = makeStyles({
    title: {
        alignSelf: 'center',
        marginTop: '2%',
        fontSize: 30,
        color: 'blue'
    },
    cardTitle: {
        color: 'blue',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    card: {
        maxWidth: 345,
        margin: 30
    }
})

export default () => {

    const classes = useStyles()

    const {data, loading} = useQuery(articlesQueries.ARTICLES)

    const currentData = data?.articles?.data || []

    return (
        <Box display="flex" justifyContent="center" alignItems="flex-end" flexWrap='wrap'>
            <Typography className={classes.title}>
                {loading ? 'Carregando...' : 'Blog Posts'}
            </Typography>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
                {currentData.map(article => (
                    <Card className={classes.card} key={article?.id}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://www.mav.com.br/wp-content/uploads/2019/05/malicious-code-4036349_1920.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography className={classes.cardTitle}>
                                {article.title}
                        </Typography>
                            <Typography>
                                {article.content}
                        </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}