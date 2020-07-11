import CustomerFormStep from './FormSteps/CustomerFormStep';
import PaymentFormStep from './FormSteps/PaymentFormStep';
import PizzaFlavourFormStep from './FormSteps/PizzaFlavourFormStep';
import PizzaPastaFormStep from './FormSteps/PizzaPastaFormStep';
import PizzaSizeFormStep from './FormSteps/PizzaSizeFormStep';

function OrderFormStepController(
  formStep,
  values,
  errors,
  touched,
  handleChange,
  handleBlur
) {
  switch (formStep) {
    case 1:
      return CustomerFormStep(
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      );
    case 2:
      return PizzaSizeFormStep(
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      );
    case 3:
      return PizzaPastaFormStep(
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      );
    case 4:
      return PizzaFlavourFormStep(
        values,
        errors,
        touched,
        handleChange,
        handleBlur
      );
    case 5:
      return PaymentFormStep(values, errors, touched, handleChange, handleBlur);
    default:
      break;
  }

  return null;
}

export default OrderFormStepController;
