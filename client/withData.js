import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

function createClient({ headers }) {
  return new ApolloClient({
    uri: 'http://localhost:5000/graphql', // use next integrated .env
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });

  // add local state
}

export default withApollo(createClient);
