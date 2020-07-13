import React from 'react';

import PropTypes from 'prop-types';

import { WarningCardWrapper, WarningCardText } from './WarningCardStyles';

function Card({ children }) {
  return (
    <WarningCardWrapper>
      <WarningCardText>{children}</WarningCardText>
    </WarningCardWrapper>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
