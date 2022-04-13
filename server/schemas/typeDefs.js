const { gql } = require('apollo-server-express');

const typeDefs = gql`  

type User {
  _id: ID
  username: String
  email: String
}

type Auth {
  token: ID!
  user: User
}

  type Card {
    _id: ID
    uid: Int
    pair_id: Int
    content: String
    stat: String
    topic: String
  }
    type Query {
        cards: [Card]
        class(id: ID!): Card
      }
      type Query {
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
      }
    
      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
      }
  }`;


module.exports = typeDefs;