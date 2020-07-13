import React from 'react';

import PropTypes from 'prop-types';

import { ActionButtonWrapper } from './ActionButtonStyles';

function ActionButton({ type, title, onClick, disabled }) {
  return (
    <ActionButtonWrapper type={type} onClick={onClick} disabled={disabled}>
      {title}
    </ActionButtonWrapper>
  );
}

ActionButton.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ActionButton.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
};

export default ActionButton;
