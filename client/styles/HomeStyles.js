import styled from 'styled-components';

export const Header = styled.header`
  float: right;
  flex: 1;
  display: flex;
  padding-right: 230px;
`;

export const Mainbody = styled.h2`
  color: white;
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding-top: 200px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  text-align: left;
  padding-left: 150px;
  padding-top: 25px;
`;

export const Styledlink = styled.a`
  text-decoration: none;
`;

export const Bodybackground = styled.body`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #0052d4 0%, #4364f7 100%), #6fb1fc;
  background-size: cover;
`;

export const Mainbutton = styled.button`
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
