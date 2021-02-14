import { ApolloProvider } from 'react-apollo';

import withData from '../withData';
import Page from '../components/Page';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

export default withData(MyApp);
