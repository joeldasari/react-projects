/* eslint-disable react/prop-types */
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
const Result = ({ questions, userAnswers, resetQuiz }) => {
  const correctAnswers = userAnswers.filter((ans) => ans.correctAnswer);
  return (
    <div className="h-max w-[600px] space-y-6 max-sm:w-[300px]">
      <h1 className="text-center text-xl font-semibold max-sm:text-lg">
        Result
      </h1>
      <div className="space-y-2">
        {questions.map((que, index) => (
          <div
            key={index}
            className={`flex items-center justify-between rounded-md border p-2 ${
              userAnswers[index].userAnswer === userAnswers[index].correctAnswer
                ? "border-green-500 bg-green-100 text-green-500"
                : "border-red-500 bg-red-100 text-red-500"
            }`}
          >
            <p className="max-sm:text-xs">
              {que.id}. {que.question}
            </p>
            {userAnswers[index].userAnswer ===
            userAnswers[index].correctAnswer ? (
              <FaCheckCircle className="text-lg text-green-500" />
            ) : (
              <FaTimesCircle className="text-lg text-red-500" />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-semibold">
          Your Score: {correctAnswers.length}/{questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-xs text-white"
        >
          <GrPowerReset />
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
