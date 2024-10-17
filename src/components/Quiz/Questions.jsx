/* eslint-disable react/prop-types */
const Questions = ({ question, handleNextQuestion }) => {
  return (
    <div className="h-max w-[600px] space-y-4 rounded-md border p-8 shadow-md max-sm:w-[300px]">
      <h3 className="text-xl font-semibold max-sm:text-base">
        {question.id}. {question.question}
      </h3>
      <ul className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {question.options.map((option, index) => (
          <li
            onClick={() =>
              handleNextQuestion({
                userAnswer: option.option,
                correctAnswer: option.isCorrect && option.option,
              })
            }
            className="cursor-pointer rounded-md border-2 border-gray-200 p-2 hover:bg-gray-200 active:bg-gray-300 max-sm:text-sm"
            key={index}
          >
            {index + 1}. {option.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
