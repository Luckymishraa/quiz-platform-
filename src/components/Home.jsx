import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz Platform!</h1>
      <div className="bg-indigo-100 bg-opacity-50 p-4 my-6 rounded-2xl shadow-2xl">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4 max-w-lg">
  Every question is a chance to learn! Take this quiz, challenge your mind, and become a little smarter with each attempt!
</h2>
</div>
      <button
        onClick={() => navigate("/quiz")}
        className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-600 rounded-lg shadow-xl"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
