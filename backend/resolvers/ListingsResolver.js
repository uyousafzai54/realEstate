// Every GraphQL resolver takes in four parameters
// Read more about them here: https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments

module.exports = {
  Query: {
    getListings: async function (parent, args, context, info) {
      return 'All Listings';
    },
  },
  Mutation: {
    editListing: async function (parent, args, context, info) {
      return 'Mutating Listings';
    },
  },
};
