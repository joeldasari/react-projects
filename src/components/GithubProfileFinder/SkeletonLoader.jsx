import { FaFileImage } from "react-icons/fa";
const SkeletonLoader = () => {
  return (
    <div className="grid h-[300px] w-[600px] grid-cols-2 rounded-md border border-gray-300 shadow-md max-sm:h-[550px] max-sm:w-[300px] max-sm:grid-cols-1 max-sm:p-2">
      <section className="flex flex-col items-center justify-center gap-2">
        <div className="relative flex h-[200px] w-[200px] animate-pulse items-center justify-center rounded-md bg-gray-300">
          <FaFileImage className="absolute h-[25%] w-[25%] text-gray-500" />
        </div>
        <div className="h-3 w-[160px] rounded-md bg-gray-300"></div>
      </section>
      <section className="flex animate-pulse flex-col justify-center gap-2 p-4 max-sm:justify-start">
        <div className="h-3 w-[225px] rounded-md bg-gray-300"></div>
        <div className="h-3 w-[225px] rounded-md bg-gray-300"></div>
        <div className="h-3 w-[225px] rounded-md bg-gray-300"></div>
        <div className="h-3 w-[225px] rounded-md bg-gray-300"></div>
        <div className="h-3 w-[225px] rounded-md bg-gray-300"></div>
        <div className="h-3 w-[225px] rounded-md bg-gray-300"></div>
        <div className="h-3 w-[175px] rounded-md bg-gray-300"></div>
      </section>
    </div>
  );
};

export default SkeletonLoader;
