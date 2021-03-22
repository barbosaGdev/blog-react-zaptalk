import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { PrivateRoute } from './components'
import { Login, Blog, MyProfile } from './containers'
import apolloClient from './graphql/apolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <PrivateRoute path="/blog" component={Blog} exact />
          <PrivateRoute path="/profile" component={MyProfile} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App