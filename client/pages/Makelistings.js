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

const Info = styled.div``;

const Form = styled.form`
  text-align: center;
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
`;

const Types = styled.input.attrs({
  type: 'text',
  placeholder: 'Type',
})`
  display: flex;
`;

const Description = styled.input.attrs({
  type: 'text',
  placeholder: 'Description',
})`
  float: left;
  flex: 1;
  font-size: 25px;

  padding-bottom: 300px;
  width: 700px;
  overflow-wrap: break-all;
`;

const Beds = styled.input.attrs({
  type: 'text',
  placeholder: 'Number of Beds',
})`
  display: flex;
`;

const Baths = styled.input.attrs({
  type: 'text',
  placeholder: 'Number of Baths',
})`
  display: flex;
`;

const Price = styled.input.attrs({
  type: 'text',
  placeholder: 'Price',
})`
  display: flex;
`;

const Submit = styled.input.attrs({
  type: 'submit',
})`
  float: right;
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
          <Title>Make Your Listing Here</Title>
          <Body>
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
          </Body>
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
