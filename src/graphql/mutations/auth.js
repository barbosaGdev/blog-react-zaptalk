import gql from 'graphql-tag'

export const AUTH_LOGIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`