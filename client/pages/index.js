import Head from "next/head";
import auth0 from "./api/utils/auth0";
import Link from "next/link";
import styled from 'styled-components';

const Header = styled.header`
  float: right;
  flex: 1;
  display: flex;
  padding-right: 10px;
  `;



const Title = styled.h1`

  color: white;
  font-size: 25px; 
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  text-align: left;
  padding-left: 20px;
  padding-top: 25px;
 
  `;

const Navmenu = styled.nav`
  &a:hover:before {
    visibility: visible;
    width: 100%;
  }
  
  &li:hover > a:before {
    visibility: visible;
    width: 100%;
  }

  &:active > a:before {
    visibility: visible;
    width: 100%;
  }

`;

const NavItems = styled.li` 
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 24px;
  float: left;
  list-style-type: none;
`;

const NavLink = styled.a`
  display: block;
	position: relative;
	color: rgba(255, 255, 255, 0.7);
	transition: 0.3s;
	font-size: 15px;
	font-weight: 600;
	padding: 0 3px;
	font-family: "Open Sans", sans-serif;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
    }

  &:hover {
    color: #fff;
  }
  &.active {
    color: #fff;
  }

  &:li:hover {
    color: #fff;
  }

`;


const Mainbody = styled.h2`
  color: white;
  font-size: 50px; 
  font-family: "Times New Roman", sans-serif;
  text-align: center;
  padding-top: 200px;
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

      <Bodybackground>
      <Header>
      
      
      <Navmenu class = "nav-menu">
            <ul class = "unordered">
              <NavItems class="active"><NavLink href="#intro">Home</NavLink></NavItems>
              <NavItems><NavLink href="#about">About</NavLink></NavItems>
              <NavItems><NavLink href="#services">Services</NavLink></NavItems>
              <NavItems><NavLink href="#inspiration">Inspiration</NavLink></NavItems>
              <NavItems><NavLink href="#faq">FAQ</NavLink></NavItems>
            </ul>
        </Navmenu>

      </Header>
      <Title>Real Estate Website</Title>

      
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
