import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <>
      <h1>Page not Found!</h1>
      <button type="button" onClick={() => handleNavigation('/')}>
        Back
      </button>
    </>
  );
}

export default NotFound;
