import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const StarRating = ({ count = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="relative flex min-h-screen flex-col items-center gap-12 pt-24">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        3. Star Rating
      </h1>
      <div className="flex gap-2">
        {[...Array(count)].map((_, index) => {
          index = index + 1;
          return (
            <FaStar
              key={index}
              className={`cursor-pointer text-4xl ${index <= rating ? "text-orange-300" : ""}`}
              onClick={() => setRating(index)}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-semibold">
          Your Rating: {rating}/{count}
        </p>
        <button
          onClick={() => setRating(0)}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-xs text-white"
        >
          Reset
          <GrPowerReset />
        </button>
      </div>
    </div>
  );
};

export default StarRating;
