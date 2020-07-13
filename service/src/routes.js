const express = require('express');

const RESPONSE_MESSAGES = require('./constants/RESPONSE_MESSAGES');
const WEEK_DAYS = require('./constants/WEEK_DAYS');
const orderData = require('./data/order');
const pizzaData = require('./data/pizza');

const routes = express.Router();

function setTodaysSpecial() {
  const {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
  } = WEEK_DAYS;

  const weekDay = new Array(7);
  weekDay[0] = SUNDAY;
  weekDay[1] = MONDAY;
  weekDay[2] = TUESDAY;
  weekDay[3] = WEDNESDAY;
  weekDay[4] = THURSDAY;
  weekDay[5] = FRIDAY;
  weekDay[6] = SATURDAY;

  const today = weekDay[new Date().getDay()];
  const todaysSpecial = pizzaData.flavours.find(
    item => item.specialDay === today
  );

  return todaysSpecial;
}

function isEligibleToBenefitPoints(req) {
  const { DEFAULT_MESSAGE, BENEFIT_MESSAGE } = RESPONSE_MESSAGES;
  if (req.body.pizza.flavour === setTodaysSpecial().value)
    return BENEFIT_MESSAGE;
  return DEFAULT_MESSAGE;
}

routes.get('/', (_, res) => {
  res.redirect('/pizza');
});

routes.get('/order-data', (_, res) => {
  return res.json(orderData);
});

routes.get('/pizza-data', (_, res) => {
  pizzaData.todaysSpecial = setTodaysSpecial();
  return res.json(pizzaData);
});

routes.post('/finish-order', (req, res) => {
  const responseMessage = isEligibleToBenefitPoints(req);
  return res.json(responseMessage);
});

module.exports = routes;
