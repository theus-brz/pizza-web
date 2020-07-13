const WEEK_DAYS = require('../constants/WEEK_DAYS');

const {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
} = WEEK_DAYS;

module.exports = {
  crusts: [
    { id: 1, value: 'without', label: 'Sem recheio' },
    { id: 2, value: 'catupiry', label: 'Catupiry' },
    { id: 3, value: 'cheddar', label: 'Cheddar' },
    { id: 4, value: 'cream-cheese', label: 'Cream Cheese' },
  ],
  pastas: [
    { id: 1, value: 'traditional', label: 'Tradicional' },
    { id: 2, value: 'integral', label: 'Integral' },
  ],
  sizes: [
    { id: 1, value: 'small', label: 'Pequena' },
    { id: 2, value: 'medium', label: 'Média' },
    { id: 3, value: 'big', label: 'Grande' },
  ],
  flavours: [
    { id: 1, value: 'calabresa', label: 'Calabresa', specialDay: MONDAY },
    { id: 2, value: 'portuguesa', label: 'Portuguesa', specialDay: TUESDAY },
    {
      id: 3,
      value: 'frango com caturipy',
      label: 'Frango com Catupiry',
      specialDay: WEDNESDAY,
    },
    { id: 4, value: 'brocolis', label: 'Brocolis', specialDay: THURSDAY },
    {
      id: 5,
      value: 'moda da casa',
      label: 'Moda da Casa',
      specialDay: FRIDAY,
    },
    { id: 6, value: 'atum', label: 'Atum', specialDay: SATURDAY },
    { id: 7, value: 'muçarela', label: 'Muçarela', specialDay: SUNDAY },
  ],
};
