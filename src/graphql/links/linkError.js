import { onError } from 'apollo-link-error'
import * as authService from '../../services/auth'

const unauthorized = () => {
  authService.onLogout()
}

const linkError = () => {
  return onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        if (window.location.pathname === '/login' && !authService.getAccessToken()) return
        if (message === '401: Unauthorized' || message === 'Unauthorized') {
          unauthorized()
        }
      })
    }
  })
}
export default linkError
