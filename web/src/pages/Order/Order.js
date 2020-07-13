import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Fab from '~/components/Fab/Fab';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';
import { orderDataRequest } from '~/store/modules/order/actions';
import { pizzaDataRequest } from '~/store/modules/pizza/actions';
import { Container } from '~/styles/components';

import OrderForm from './OrderForm/OrderForm';
import { OrderWrapper } from './OrderStyles';

const { FAB } = ORDER_PAGE;

function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderDataRequest());
    dispatch(pizzaDataRequest());
  }, [dispatch]);

  const history = useHistory();

  function handleNavigation() {
    return history.goBack();
  }

  return (
    <OrderWrapper>
      <Container>
        <Fab title={FAB} type="button" onClick={() => handleNavigation()} />
        {OrderForm()}
      </Container>
    </OrderWrapper>
  );
}

export default Order;
