import { useState } from "react";
import { data } from "./data";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Accordion = () => {
  const [single, setSingle] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingle = (id) => {
    setSingle(single === id ? null : id);
  };
  const handleMultiple = (id) => {
    const newArray = [...multiple];
    const index = newArray.indexOf(id);
    if (index === -1) newArray.push(id);
    else newArray.splice(index, 1);
    setMultiple(newArray);
  };
  const handleBtn = () => {
    setEnableMulti(!enableMulti);
    setSingle(null);
    setMultiple([]);
  };
  return (
    <div className="relative flex h-max min-h-screen flex-col items-center gap-4 border border-b-gray-300 py-24">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        1. Accordion
      </h1>
      {data && data.length > 0 ? (
        <>
          <button
            onClick={handleBtn}
            className="rounded-md bg-blue-600 px-4 py-2 text-xs text-white transition-shadow hover:bg-blue-700 hover:shadow-lg"
          >
            {enableMulti ? "Disable Multi-Selection" : "Enable Multi-Selection"}
          </button>
          <div className="text-sm">
            {data.map((item) => (
              <div key={item.id} className="mb-4 w-[600px] max-sm:w-[300px]">
                <div
                  onClick={
                    enableMulti
                      ? () => handleMultiple(item.id)
                      : () => handleSingle(item.id)
                  }
                  className="mb-1 flex w-full cursor-pointer items-center justify-between rounded-md border bg-gray-100 p-4 hover:bg-gray-200"
                >
                  {item.question}
                  {enableMulti ? (
                    multiple.indexOf(item.id) !== -1 ? (
                      <FaAngleUp className="text-lg" />
                    ) : (
                      <FaAngleDown className="text-lg" />
                    )
                  ) : single === item.id ? (
                    <FaAngleUp className="text-lg" />
                  ) : (
                    <FaAngleDown className="text-lg" />
                  )}
                </div>
                {enableMulti && multiple.indexOf(item.id) !== -1 ? (
                  <div className="w-full rounded-md border bg-gray-100 p-4">
                    {item.answer}
                  </div>
                ) : single === item.id ? (
                  <div className="w-full rounded-md border bg-gray-100 p-4">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};

export default Accordion;
