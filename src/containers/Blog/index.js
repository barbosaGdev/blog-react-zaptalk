import React from 'react'
import Box from '@material-ui/core/Box'
import Profile from '../../components/Profile'
import Posts from '../../components/Posts'

export default () => {
  return (
    <Box display="flex">
      <Profile />
      <Posts />
    </Box>

  )
}