import Head from 'next/head';
import {
  Title,
  Mainbody,
  Bodybackground,
  Mainbutton,
} from '../styles/HomeStyles';

const Home = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        ></link>
        <title>Real Estate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bodybackground>
        <Title>Real Estate</Title>
        <Mainbody>Find or List Your Next Home Here</Mainbody>
        <Mainbutton>Get Started</Mainbutton>
      </Bodybackground>
    </>
  );
};

export default Home;
