import gql from 'graphql-tag'

export const ARTICLES = gql`
  query articles {
    articles {
      data {
        _id
        title
        description
        content
        author
        thumbImageURL
      }
    }
  }
`