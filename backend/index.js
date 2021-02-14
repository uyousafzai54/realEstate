const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(cors());
app.use(morgan('combined')); // check https://www.npmjs.com/package/morgan for output formats

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database successfully :)');
    return app.listen({ port: PORT });
  })
  .then(() => {
    console.log(
      `Graphql server is running at http://localhost:${PORT}${server.graphqlPath}`
    );
  })
  .catch((err) => {
    console.log(err);
  });
