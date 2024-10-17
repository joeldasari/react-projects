import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setcount(count + 1);
      } else {
        setcount(0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      id="6"
      className="relative flex h-max min-h-screen flex-col items-center border border-b-gray-300 py-24"
    >
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        6. Progress Bar
      </h1>
      <div className={"h-6 w-[50vw] rounded-md bg-gray-300 max-sm:w-[75vw]"}>
        <div
          style={{ width: `${count}%` }}
          className={
            "relative flex h-6 items-center justify-center rounded-md bg-green-500 text-white transition-all max-sm:text-sm"
          }
        >
          <p className="absolute">{count}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
