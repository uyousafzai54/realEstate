import Head from "next/head";
import auth0 from "./api/utils/auth0";
import Link from "next/link";
import styled from 'styled-components';

const All = styled.html`
margin-top: -21px;
  height: 100vh;
  width: 100vw;
  background-color: #00008B;
`;

const Body = styled.body`

margin-left: 50%;
width: 95vh; 
height: 90vh;
background: linear-gradient(45deg, #0052D4 0%, #4364F7 100%), #6FB1FC;
`;

const Form = styled.form`

  text-align: center;


`;

const Info = styled.li`
  list-style-type: none;
`;

export default function Listings() {
    return(
      <>

<All>
      <h1>Make Your Listing Here</h1>

    <Body>

      <Form>
        <ul>
          <Info>
          <input type ="text" placeholder = "Property Address" size = "50"></input> 
          </Info>

          <Info>
            <input type = "text" placeholder = "Type"></input>
          </Info>

          <Info>
            <input type = "text" placeholder = "Description"></input>
          </Info>

          
          <Info>
            <input type = "text" placeholder = "Beds"></input>
          </Info>

          <Info>
            <input type = "text" placeholder = "Baths"></input>
          </Info>

          <Info>
            <input type = "text" placeholder = "Price"></input>
          </Info>

          <Info>
            <input type = "submit" value ="Submit"></input>
          </Info>
        </ul>
      </Form>

      </Body>
      </All>
      </>
    ); 


  }

