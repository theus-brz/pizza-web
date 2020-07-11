import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <div>
      <h1>Pizza Web!</h1>
      <button type="button" onClick={() => handleNavigation('/order')}>
        Make your Pizza!
      </button>
    </div>
  );
}

export default Home;
