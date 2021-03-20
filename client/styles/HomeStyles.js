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

export const Navmenu = styled.nav`
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

export const NavItems = styled.li`
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 24px;
  float: left;
  list-style-type: none;
`;

export const NavLink = styled.a`
  display: block;
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.3s;
  font-size: 15px;
  font-weight: 600;
  padding: 0 3px;
  font-family: 'Poppins', sans-serif;

  &:before {
    content: '';
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
