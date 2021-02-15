import Head from "next/head";
import auth0 from "./api/utils/auth0";
import Link from "next/link";
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  font-size: 25px; 
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  text-align: left;
  `;

const Mainbody = styled.h2`
  color: white;
  font-size: 50px; 
  font-family: "Times New Roman", sans-serif;
  text-align: center;
  padding-top: 120px;
  top: 50%;
  `;

const Bodybackground = styled.body`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #0052D4 0%, #4364F7 100%), #6FB1FC;
  background-size: cover;
  `;

const Mainbutton = styled.button`
  border: solid;
  color: white;
  background-color: Transparent;
  font-size: 20px;
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 130px;
  height: 70px;
  `;

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header>
      <Title>Real Estate Website</Title>
      <nav class = "nav-menu">
            <ul>
              <li class="active"><a href="#intro">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#inspiration">Inspiration</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>

      </header>



      <Bodybackground>
          <Mainbody>
            Find or List Your Next Home Here
          </Mainbody>

          <Mainbutton>
            Get Started
          </Mainbutton>
      </Bodybackground> 

    </>
  );
}


export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  return {
    props: {
      user: session?.user || null,
    },
  };
}
