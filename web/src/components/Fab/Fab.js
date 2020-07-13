import React from 'react';

import PropTypes from 'prop-types';

import { FabWrapper } from './FabStyles';

function Fab({ type, title, onClick, disabled }) {
  return (
    <FabWrapper type={type} onClick={onClick} disabled={disabled}>
      {title}
    </FabWrapper>
  );
}

Fab.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Fab.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
};
export default Fab;
