import { gql } from '@apollo/client'

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categoriesList {
      items {
        name
        color
        icon
        id
      }
    }
  }
`