const { gql } = require('apollo-server');

module.exports = gql`
  type Listing {
    id: ID!
    title: String!
    address: String!
    description: String!
    image: String!
  }
  type Query {
    getListings: String!
  }
  type Mutation {
    editListing: String!
  }
`;
