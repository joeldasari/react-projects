import { useState } from "react";
import { hexPossibilities } from "./data";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#f06fff");

  const generateRandom = (len) => {
    return Math.floor(Math.random() * len);
  };

  const handleGenerate = () => {
    if (colorType === "hex") {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor =
          hexColor + hexPossibilities[generateRandom(hexPossibilities.length)];
      }
      setColor(hexColor);
    } else {
      const r = generateRandom(256);
      const g = generateRandom(256);
      const b = generateRandom(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  };
  return (
    <div className="relative min-h-screen border border-b-gray-300">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        2. Random Color Generator
      </h1>
      <div className="flex flex-col items-center gap-6 pt-24">
        <div className="flex gap-3 text-xs">
          <button
            onClick={() => setColorType("hex")}
            className={`${colorType === "hex" ? "rounded-md bg-blue-500 px-4 py-2 text-white" : "rounded-md bg-gray-300 px-4 py-2"}`}
          >
            HEX Color
          </button>
          <button
            onClick={() => setColorType("rgb")}
            className={`${colorType === "rgb" ? "rounded-md bg-blue-500 px-4 py-2 text-white" : "rounded-md bg-gray-300 px-4 py-2"}`}
          >
            RGB Color
          </button>
        </div>
        <button
          className="rounded-md bg-black px-4 py-2 text-xs text-white"
          onClick={handleGenerate}
        >
          Generate
        </button>
        <div
          style={{ backgroundColor: color }}
          className="h-[300px] w-[600px] rounded-md transition-colors duration-300 ease-in-out max-sm:h-[150px] max-sm:w-[300px]"
        ></div>
        <h1 className="font-semibold">{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
