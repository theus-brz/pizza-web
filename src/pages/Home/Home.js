import React from 'react';
import { useHistory } from 'react-router-dom';

import { HomeWrapper } from './HomeStyles';

function Home() {
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <HomeWrapper>
      <h1>Pizza Web!</h1>
      <button type="button" onClick={() => handleNavigation('/order')}>
        Make your Pizza!
      </button>
    </HomeWrapper>
  );
}

export default Home;
