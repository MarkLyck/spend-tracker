import { gql } from '@apollo/client'

export const GET_HEAD_CATEGORIES = gql`
  query GET_HEAD_CATEGORIES {
    headCategoriesList {
      items {
        name
        id
      }
    }
  }
`

export const GET_HEAD_CATEGORIES_WITH_CATEGORIES = gql`
  query GET_HEAD_CATEGORIES {
    headCategoriesList {
      items {
        name
        subCategories {
          items {
            icon
            color
            name
          }
        }
      }
    }
  }
`