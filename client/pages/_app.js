import Page from '../components/Page';
import '../styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
