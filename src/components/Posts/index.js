import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { CardContent, CardMedia } from '@material-ui/core'

export default () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="flex-end" width="100%" flexDirection="column">

            <Typography style={{ alignSelf: 'center', marginLeft: '20%', marginTop: '2%', fontSize: 30 }}>Blog posts</Typography>

            <Box display="flex" justifyContent="space-around" width="80%" flexWrap="wrap">
                <Card style={{ maxWidth: 345, margin: 30 }}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://www.mav.com.br/wp-content/uploads/2019/05/malicious-code-4036349_1920.png"
                        title="Contemplative Reptile"
                    />

                    <CardContent>
                        <Typography>
                            Loren ipsum
                    </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    </CardContent>
                </Card>
                <Card style={{ maxWidth: 345, margin: 30 }}>

                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://www.mav.com.br/wp-content/uploads/2019/05/malicious-code-4036349_1920.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography>
                            Loren ipsum
                    </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    </CardContent>
                </Card>

                <Card style={{ maxWidth: 345, margin: 30 }}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://www.mav.com.br/wp-content/uploads/2019/05/malicious-code-4036349_1920.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography>
                            Loren ipsum
                    </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    </CardContent>
                </Card>

                <Card style={{ maxWidth: 345, margin: 30 }}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://www.mav.com.br/wp-content/uploads/2019/05/malicious-code-4036349_1920.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography>
                            Loren ipsum
                    </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Box>
    )
}