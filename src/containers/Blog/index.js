import React from 'react'
import Profile from '../../components/Profile'
import Posts from '../../components/Posts'

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Profile />
      <Posts />
    </div>

  )
}