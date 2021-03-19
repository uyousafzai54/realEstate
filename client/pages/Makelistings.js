import Head from 'next/head';
import auth0 from './api/utils/auth0';
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

const All = styled.html`
  margin-top: -21px;
  height: 101vh;
  width: 100vw;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  margin-bottom: -20px;
`;

const Body = styled.body`
  margin-left: 100px;
  margin-right: 100px;
  height: 800vh;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  align-items: center;
  left: 50%;
  min-height: 100%;
`;

const Info = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: -180px;
  font-family: "Poppins";
`;

const Form = styled.form`
  margin-top: 70px;
  

`;

const Title = styled.h1`
  color: white;
  font-size: 35px;
  font-family: 'Lato', sans-serif;
  margin-top: 20px;
  text-align: center;
  padding-top: 25px;
`;

const Address = styled.input.attrs({
  type: 'text',
  placeholder: 'Address',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  
  margin-left: -675px;
  width: 200px;
`;

const Types = styled.input.attrs({
  type: 'text',
  placeholder: 'Type',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 50px;
  width: 200px;
  
`;

const Description = styled.input.attrs({
  type: 'text',
  placeholder: 'Description',
})`
  float: left;
  flex: 1;
  font-size: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  padding-bottom: 300px;
  margin-left: 30px;
  width: 700px;
  overflow-wrap: break-all;
  margin-left: 100px;
`;

const Beds = styled.input.attrs({
  type: 'text',
  placeholder: 'Number of Beds',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 50px;
  width: 200px;
`;

const Baths = styled.input.attrs({
  type: 'text',
  placeholder: 'Number of Baths',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -475px;
  margin-top: 50px;
`;

const Price = styled.input.attrs({
  type: 'text',
  placeholder: 'Price',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 50px;
  width: 200px;
`;

const Submit = styled.input.attrs({
  type: 'submit',
})`
  margin-top: 500px;
  margin-lefT: 100px;
  background-color: Transparent;
  display: inline-block;
  padding: 0.5em 3em; 
  border: 0.16em solid #FFFFFF;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Cambri', sans-serif;
  font-weight: 400;
  color: white;
  text-align: center;
  height: 70px;
  transition: all 0.15s;
  width: 500px;
  &:hover {
    color: #DDDDDD;
    border-color: #DDDDDD;
  }

  &:active {
    color: #BBBBBB;
    border-color: #BBBBBB;
  }
`;

class Makelistings extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <form>
        <All>
          <Title>Make Your Listing Here!</Title>

            <Form>
              <Description />
              <Info>
                <Address />
                <Types />
                <Beds />
                <Price />
              </Info>
              <Submit />
            </Form>

        </All>
        
      </form>
    );
  }
}

export default Makelistings;

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
      </form>
    );
  }
}
