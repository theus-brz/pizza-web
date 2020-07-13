import CustomerFormStep from './FormSteps/CustomerFormStep';
import PaymentFormStep from './FormSteps/PaymentFormStep';
import PizzaFlavourFormStep from './FormSteps/PizzaFlavourFormStep';
import PizzaPastaFormStep from './FormSteps/PizzaPastaFormStep';
import PizzaSizeFormStep from './FormSteps/PizzaSizeFormStep';

function OrderFormStepController(formStep, wrappedParams) {
  switch (formStep) {
    case 0: // 1:
      return CustomerFormStep(wrappedParams);
    case 1: // 2:
      return PizzaSizeFormStep(wrappedParams);
    case 3:
      return PizzaPastaFormStep(wrappedParams);
    case 4:
      return PizzaFlavourFormStep(wrappedParams);
    case 5:
      return PaymentFormStep(wrappedParams);
    default:
      break;
  }

  return null;
}

export default OrderFormStepController;
