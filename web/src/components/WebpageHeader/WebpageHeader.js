import React from 'react';

import PropTypes from 'prop-types';

import {
  WebpageHeaderWrapper,
  WebpageHeaderTitle,
} from './WebpageHeaderStyles';

function WebpageHeader({ title }) {
  return (
    <WebpageHeaderWrapper>
      <WebpageHeaderTitle>{title}</WebpageHeaderTitle>
    </WebpageHeaderWrapper>
  );
}

WebpageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WebpageHeader;
