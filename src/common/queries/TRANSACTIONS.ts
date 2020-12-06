import { gql } from '@apollo/client'

export const CREATE_TRANSACTION = gql`
    mutation CREATE_TRANSACTION(
        $value: Float!
        $category: ID!
        $note: String
        $date: Date!
        $budget: ID!
    ) {
        transactionCreate(
            data: {
                value: $value,
                date: $date,
                note: $note,
                category: {
                    connect: { id: $category }
                },
                budget:{
                    connect: { id: $budget }
                }
            }
        ) {
            id
        }
  }
`