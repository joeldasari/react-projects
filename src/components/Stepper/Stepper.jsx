import { useState } from "react";
import CheckOutSteps from "./CheckOutSteps";
import { checkoutSteps } from "./data";
import { FaArrowRight } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const ActiveComponent = checkoutSteps[currentStep - 1].Component();
  const handleClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === checkoutSteps.length) {
        setCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const handleReset = () => {
    setCompleted(false);
    setCurrentStep(1);
  };
  return (
    <div
      id="8"
      className="relative flex h-max min-h-screen flex-col items-center gap-8 border border-b-gray-300 py-24"
    >
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        8. Stepper Component
      </h1>
      <h1 className="text-xl font-semibold">Checkout</h1>

      <CheckOutSteps
        steps={checkoutSteps}
        currentStep={currentStep}
        completed={completed}
      />

      {ActiveComponent}

      {!completed && (
        <button
          onClick={handleClick}
          className={`flex items-center gap-2 rounded-md ${currentStep === checkoutSteps.length ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}   px-4 py-2 text-xs text-white`}
        >
          <span className="font-semibold">
            {currentStep === checkoutSteps.length ? "Finish" : "Next"}
          </span>
          {currentStep !== checkoutSteps.length && <FaArrowRight />}
        </button>
      )}
      {completed && (
        <button
          onClick={handleReset}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-xs text-white"
        >
          <GrPowerReset />
          Reset
        </button>
      )}
    </div>
  );
};

export default Stepper;
