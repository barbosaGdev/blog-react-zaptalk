import { setContext } from 'apollo-link-context'
import * as authService from '../../services/auth'

const linkAuth = setContext((_, { headers }) => {
    const token = authService.getAccessToken()
    const authHeaders = {}
    if (token) {
      authHeaders['Authorization'] = token
    }
    return {
      headers: {
        ...headers,
        ...authHeaders
      }
    }
  })

  export default linkAuth