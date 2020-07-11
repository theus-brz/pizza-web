import React from 'react';

function PaymentFormStep(values, errors, touched, handleChange, handleBlur) {
  return (
    <div>
      <p>Forma de pagamento</p>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email && errors.email}
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password && errors.password}
    </div>
  );
}

export default PaymentFormStep;
