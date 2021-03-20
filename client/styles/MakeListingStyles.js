import styled from 'styled-components';

export const All = styled.html`
  margin-top: -21px;
  height: 101vh;
  width: 100vw;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  margin-bottom: -20px;
`;

export const Body = styled.body`
  margin-left: 100px;
  margin-right: 100px;
  height: 800vh;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  align-items: center;
  left: 50%;
  min-height: 100%;
`;

export const Info = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: -180px;
  font-family: 'Poppins';
`;

export const Form = styled.form`
  margin-top: 70px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 35px;
  font-family: 'Lato', sans-serif;
  margin-top: 20px;
  text-align: center;
  padding-top: 25px;
`;

export const Address = styled.input.attrs({
  type: 'text',
  placeholder: 'Address',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;

  margin-left: -675px;
  width: 400px;
`;

export const Types = styled.input.attrs({
  type: 'text',
  placeholder: 'Type',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 50px;
  width: 400px;
`;

export const Description = styled.input.attrs({
  type: 'text',
  placeholder: 'Description',
})`
  float: left;
  flex: 1;
  font-size: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  padding-bottom: 300px;
  margin-left: 30px;
  width: 700px;
  overflow-wrap: break-all;
  margin-left: 100px;
`;

export const Beds = styled.input.attrs({
  type: 'text',
  placeholder: 'Number of Beds',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 50px;
  width: 400px;
`;

export const Baths = styled.input.attrs({
  type: 'text',
  placeholder: 'Number of Baths',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -475px;
  margin-top: 50px;
`;

export const Price = styled.input.attrs({
  type: 'text',
  placeholder: 'Price',
})`
  display: flex;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 10px;
  margin-left: -675px;
  margin-top: 50px;
  width: 400px;
`;

export const Submit = styled.input.attrs({
  type: 'submit',
})`
  margin-top: 500px;
  margin-left: 100px;
  background-color: Transparent;
  display: inline-block;
  padding: 0.5em 3em;
  border: 0.16em solid #ffffff;
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
    color: #dddddd;
    border-color: #dddddd;
  }

  &:active {
    color: #bbbbbb;
    border-color: #bbbbbb;
  }
`;
