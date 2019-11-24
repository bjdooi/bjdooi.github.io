import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, StyledLink } from './item.css';

const Item = ({ title, copy, image, endpoint }) => (
  <figure>
    <StyledLink to={endpoint}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </StyledLink>
    <figcaption>
      <StyledLink to={endpoint}>
        <Title>{title}</Title>
      </StyledLink>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  endpoint: PropTypes.string,
};

export default Item;
