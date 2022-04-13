import { gql } from "@apollo/client"
export const QUERY_CARD = gql`{
        cards{
            _id
            uid
            pair_id
            content
            stat
            topic
        }
    }
`