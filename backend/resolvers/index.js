const listingsResolver = require('./ListingsResolver');

module.exports = {
  Query: {
    ...listingsResolver.query,
  },
  Mutation: {
    ...listingsResolver.mutation,
  },
};
