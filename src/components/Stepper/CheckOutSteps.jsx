/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
const CheckOutSteps = ({ steps = [], currentStep, completed }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const res = ((currentStep - 1) / (steps.length - 1)) * 100;
    setProgress(Math.floor(res));
  }, [progress, currentStep, steps]);
  return (
    <div className="relative flex justify-center gap-32 text-sm max-lg:gap-28 max-sm:gap-16">
      {steps.map((step, index) => (
        <div className="flex flex-col items-center gap-2" key={index}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${completed || currentStep > index + 1 ? "bg-green-500" : currentStep === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {currentStep > index + 1 || completed ? (
              <FaCheck className="h-4 w-4 text-white" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <div className="max-sm:hidden">{step.name}</div>
        </div>
      ))}
      <div className="absolute top-3 -z-10 flex h-[6px] w-[85%] bg-gray-300">
        <div
          style={{ width: `${progress}%` }}
          className="bg-green-500 duration-500"
        ></div>
      </div>
    </div>
  );
};

export default CheckOutSteps;
