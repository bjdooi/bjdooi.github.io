import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';
import { Link } from 'gatsby';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Link to="/invoice">
        <Container isVisible={isVisible}>
          <Title tag="span">Send me money</Title>
        </Container>
      </Link>
    )}
  </IO>
);

export default IOExample;
