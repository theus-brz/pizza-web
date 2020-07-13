import React from 'react';

import PropTypes from 'prop-types';

import { CardWrapper, CardTitle, CardContent } from './CardStyles';

function Card({ title, children }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>

      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Card.defaultProps = {
  title: '',
};

export default Card;
