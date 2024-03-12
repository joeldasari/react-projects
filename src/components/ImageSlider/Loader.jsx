import { FaImages } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="relative h-[400px] w-[600px] animate-pulse rounded-lg bg-gray-300 max-sm:h-[200px] max-sm:w-[300px]">
      <div className="absolute flex h-full w-full items-center justify-center">
        <FaImages className="h-[35%] w-[35%] text-gray-400" />
      </div>
    </div>
  );
};

export default Loader;
