import Page from '../components/Page';
import '../styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Head>
        <link href="../styles.css" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
