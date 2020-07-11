import React from 'react';
import { useHistory } from 'react-router-dom';

import OrderForm from './OrderForm/OrderForm';

function Order() {
  const history = useHistory();

  function handleNavigation() {
    return history.goBack();
  }

  return (
    <div>
      <button type="button" onClick={() => handleNavigation()}>
        Back to home
      </button>

      {OrderForm()}
    </div>
  );
}

export default Order;
