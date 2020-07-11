import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  function handleNavegation(path) {
    return history.push(path);
  }

  return (
    <>
      <h1>Page not Found!</h1>
      <button type="button" onClick={() => handleNavegation('/')}>
        Back
      </button>
    </>
  );
}

export default NotFound;
