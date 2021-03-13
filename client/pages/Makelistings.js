import Head from 'next/head';
import auth0 from './api/utils/auth0';
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

const All = styled.html`
  margin-top: -21px;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
`;

const Body = styled.body`
  margin-left: 100px;
  margin-right: 100px;
  height: 90vh;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  align-items: center;
  left: 50%;
`;

const Info = styled.div`
  float: right;
  margin-top: 10px;
`;

const Form = styled.form`

`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  text-align: center;
  padding-top: 25px;
`;

const Address = styled.input.attrs({
  type: 'text',
  placeholder: 'Property',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -475px;
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
  margin-left: -475px;
  margin-top: 50px;
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
  margin-left: -475px;
  margin-top: 50px;
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
  margin-left: -475px;
  margin-top: 50px;
`;

const Submit = styled.input.attrs({
  type: 'submit',
})`
  margin-top: 500px;
  margin-left: 330px;
  background-color: Transparent;
  display: inline-block;
  padding: 0.5em 3em; 
  border: 0.16em solid #FFFFFF;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  text-align: center;
  height: 70px;
  transition: all 0.15s;

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
        );
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
