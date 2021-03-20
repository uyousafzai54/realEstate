import React from 'react';

import {
  All,
  Body,
  Info,
  Form,
  Title,
  Address,
  Types,
  Description,
  Beds,
  Baths,
  Price,
  Submit,
} from '../styles/MakeListingStyles';

const MakeListings = () => {
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
};

export default MakeListings;
