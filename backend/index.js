// primary backend file
const { ApolloServer } = require('apollo-server');

// import resolvers
// import typeDefs

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
