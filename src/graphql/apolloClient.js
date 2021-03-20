import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import linkError from './links/linkError'
import linkHttp from './links/linkHttp'
import linkAuth from './links/linkAuth'

const apolloHTTPClient = () => {
  return linkError().concat(linkAuth).concat(linkHttp)
}

const client = new ApolloClient({
  link: apolloHTTPClient(this),
  cache: new InMemoryCache(),
})

export default client
