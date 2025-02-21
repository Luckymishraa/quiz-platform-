import { useEffect, useState } from "react";
import { getAttempts } from "../utils/indexedDB";

const AttemptHistory = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    getAttempts().then(setAttempts);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="p-6 max-w-2xl w-full bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Attempt History</h2>

        {attempts.length === 0 ? (
          <p className="text-center text-gray-600">No attempts yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-indigo-500 text-white">
                  <th className="border border-gray-300 p-3 text-left">Date</th>
                  <th className="border border-gray-300 p-3 text-center">Score</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((attempt, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 transition`}
                  >
                    <td className="border border-gray-300 p-3">{attempt.date}</td>
                    <td className="border border-gray-300 p-3 text-center font-semibold">
                      {attempt.score} / {attempt.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttemptHistory;
