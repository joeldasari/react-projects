import { useState } from "react";
import Questions from "./Questions";
import questions from "./constants/data.json";
import Result from "./Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleNextQuestion = (answer) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, answer]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  return (
    <div className="relative flex h-max min-h-screen justify-center border border-b-gray-300 py-24">
      <h1 className="absolute left-8 top-6 text-lg font-semibold">
        7. Basic Quiz App
      </h1>
      {currentQuestion < questions.length && (
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold">Total questions: {questions.length}</p>

          <Questions
            question={questions[currentQuestion]}
            handleNextQuestion={handleNextQuestion}
          />
        </div>
      )}
      {!(currentQuestion < questions.length) && (
        <Result
          questions={questions}
          userAnswers={userAnswers}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
