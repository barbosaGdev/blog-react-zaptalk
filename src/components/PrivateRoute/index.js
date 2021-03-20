import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as authService from '../../services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!authService.getAccessToken()) {
          return <Redirect to='/' />
        }
        return <Component {...props} />
      }}
    />
  )
}
export default PrivateRoute