import { useState } from "react";
import Timer from "./Timer";
import questions from "../data/questions";
import { saveAttempt } from "../utils/indexedDB";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  const handleAnswerSubmission = () => {
    if (!selectedAnswer) return;

    const correctAnswer = questions[currentQuestion].answer;
    let isCorrect = false;

    if (typeof correctAnswer === "number") {
      if (parseInt(selectedAnswer, 10) === correctAnswer) isCorrect = true;
    } else {
      if (selectedAnswer === correctAnswer) isCorrect = true;
    }

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct answer: ${correctAnswer}`);
    }

    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
      setFeedback("");
      setIsAnswered(false);
    } else {
      saveAttempt({ date: new Date().toLocaleString(), score, total: questions.length });
      navigate("/scoreboard");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-300">
    <h2 className="text-xl font-semibold text-center text-gray-800 mb-4 max-w-lg">
  Every question is a chance to learn! Take this quiz, challenge your mind, and become a little smarter with each attempt!
</h2>

      <div className="p-8 max-w-lg w-full mx-auto bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">{questions[currentQuestion].question}</h2>

        <Timer key={currentQuestion} duration={30} nextQuestion={nextQuestion} />

        <div className="mt-6 flex justify-center">
          {typeof questions[currentQuestion].answer === "number" ? (
            <input
              type="number"
              className=" border bg-white text-lg rounded-xl shadow-md p-3 w-3/4 focus:ring-2 focus:ring-gray-900 focus:outline-none transition-all duration-200"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={isAnswered}
            />
          ) : (
            <div className="w-3/4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full p-3 mt-3 border rounded-lg text-lg font-medium transition-all duration-200 ${
                    selectedAnswer === option ? "bg-gray-500 text-white shadow-md scale-105" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedAnswer(option)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-lg font-semibold">{feedback}</p>

        <div className="flex gap-4 mt-6 justify-center">
          <button 
            onClick={handleAnswerSubmission} 
            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-medium w-1/3 transition-transform duration-200 hover:bg-green-600 active:scale-95"
            disabled={isAnswered}
          >
            Submit
          </button>

          <button 
            onClick={nextQuestion} 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg text-lg font-medium w-1/3 transition-transform duration-200 hover:bg-gray-700 active:scale-95"
            disabled={!isAnswered}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
