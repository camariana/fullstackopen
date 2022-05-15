import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query allAuthors {
    allAuthors {
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query allBooks {
    allBooks {
      title
      published
      author
    }
  }
`

// export const FIND_AUTHOR = gql`

// `

// export const FIND_BOOK = gql`

// `

// export const CREATE_BOOK = gql`

// `