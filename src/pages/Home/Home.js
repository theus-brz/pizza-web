import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  function handleNavegation(path) {
    return history.push(path);
  }

  return (
    <button type="button" onClick={() => handleNavegation('/order')}>
      Make your Pizza!
    </button>
  );
}

export default Home;
