import Page from '../components/Page';
import '../styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default withData(MyApp);
