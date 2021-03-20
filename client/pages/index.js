import Head from 'next/head';
import auth0 from './api/utils/auth0';
import Link from 'next/link';
import styled from 'styled-components';
import Home from './Home';

const Index = ({ user }) => <Home />;

export default Index;

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  return {
    props: {
      user: session?.user || null,
    },
  };
}
