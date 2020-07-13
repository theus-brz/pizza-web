import React from 'react';

import PropTypes from 'prop-types';

import { ErrorMessageWrapper } from './ErrorMessageStyles';

function ErrorMessage({ children }) {
  return <ErrorMessageWrapper>{children}</ErrorMessageWrapper>;
}

ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorMessage;
