import Head from "next/head";
import auth0 from "./api/utils/auth0";
import Link from "next/link";
import styled from 'styled-components';


const Header = styled.header`
  float: right;
  flex: 1;
  display: flex;
  padding-right: 230px;
  `;



const Title = styled.h1`

  color: white;
  font-size: 25px; 
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  text-align: left;
  padding-left: 150px;
  padding-top: 25px;

 
  `;

const Styledlink = styled.a`
 text-decoration: none;
`;

const Navmenu = styled.nav`
  &a:hover:before {
    visibility: visible;
    text-decoration: none;
    width: 100%;
  }
  
  &li:hover > a:before {
    visibility: visible;
    text-decoration: none;
    width: 100%;
  }

  &:active > a:before {
    visibility: visible;
    text-decoration: none;
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
	font-family: "Poppins", sans-serif;

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
    position: relative;
    border-bottom: 2px solid white;
    transition: width 0.2s, background-color 0.5s;
  }

  &:li:hover {
    color: #fff;
  }

  &.active {
    text-decoration: none;
  }

`;



const Mainbody = styled.h2`
  color: white;
  font-size: 50px; 
  font-family: "Poppins", sans-serif;
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
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"></link>
        <title>Real Estate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bodybackground>
      <Header>
      
      
      <Navmenu class = "nav-menu">
            <ul class = "unordered">
              <NavItems class="active"><NavLink className = "active" href="#intro">Home</NavLink></NavItems>
              <NavItems>
                <NavLink className = "active" >
                  <Link href="Makelistings">
                    <Styledlink>Listings</Styledlink>
                   </Link>
                   </NavLink>
              </NavItems>
              <NavItems><NavLink className = "active" href="#services">Services</NavLink></NavItems>
              <NavItems><NavLink className = "active" href="#inspiration">Inspiration</NavLink></NavItems>
              <NavItems><NavLink className = "active" href="#faq">FAQ</NavLink></NavItems>
            </ul>
        </Navmenu>

      </Header>
      <Title>Real Estate</Title>

      
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
