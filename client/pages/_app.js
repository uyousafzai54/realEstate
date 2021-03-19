import Page from '../components/Page';
import '../styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
      <Head>
        <link href="../styles.css" rel="stylesheet"></link>
      </Head>
    </Page>
  );
}

export default MyApp;
