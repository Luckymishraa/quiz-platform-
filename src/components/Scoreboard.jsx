import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAttempts } from "../utils/indexedDB";

const Scoreboard = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchAttempts = async () => {
      const attempts = await getAttempts();
      if (attempts.length > 0) {
        setScore(attempts[attempts.length - 1].score); // Get latest attempt score
      }
    };
    fetchAttempts();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-300">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold">Your Score: {score}</h2>
      <button onClick={() => navigate("/history")} className="mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-lg shadow-xl">
        View Attempt History
      </button>
      <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-700  text-white rounded-lg shadow-xl">
        Play Again
      </button>
    </div>
    </div>
  );
};

export default Scoreboard;
