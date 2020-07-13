import React from 'react';

import PropTypes from 'prop-types';

import {
  ActionButtonWrapper,
  ActionButtonTouchable,
} from './ActionButtonStyles';

function ActionButton({ type, title, onClick, disabled }) {
  return (
    <ActionButtonWrapper>
      <ActionButtonTouchable type={type} onClick={onClick} disabled={disabled}>
        {title}
      </ActionButtonTouchable>
    </ActionButtonWrapper>
  );
}

ActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ActionButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default ActionButton;
