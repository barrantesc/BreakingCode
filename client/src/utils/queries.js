import { gql } from '@apollo/client';

export const GET_ME = gql` 
    query me {
        me{
            _id
           username
           email
        }
    }
`;
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
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      }
    }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
