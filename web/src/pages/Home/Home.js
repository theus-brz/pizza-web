import React from 'react';
import { useHistory } from 'react-router-dom';

import ActionButton from '~/components/ActionButton/ActionButton';
import HOME_PAGE from '~/constants/RESOURCES/HOME_PAGE';
import ROUTES from '~/constants/ROUTES';

import { HomeWrapper } from './HomeStyles';

const { BUTTON } = HOME_PAGE;
const { ORDER } = ROUTES;

function Home() {
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <HomeWrapper>
      <ActionButton
        title={BUTTON}
        type="button"
        onClick={() => handleNavigation(ORDER)}
      />
    </HomeWrapper>
  );
}

export default Home;
