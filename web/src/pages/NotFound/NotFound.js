import React from 'react';
import { useHistory } from 'react-router-dom';

import ActionButton from '~/components/ActionButton/ActionButton';
import NOTFOUND_PAGE from '~/constants/RESOURCES/NOTFOUND_PAGE';

import { NotFoundWrapper, NotFoundTitle } from './NotFoundStyles';

const { TITLE, BUTTON } = NOTFOUND_PAGE;

function NotFound() {
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <NotFoundWrapper>
      <NotFoundTitle>{TITLE}</NotFoundTitle>

      <ActionButton
        title={BUTTON}
        type="button"
        onClick={() => handleNavigation('/')}
      />
    </NotFoundWrapper>
  );
}

export default NotFound;
