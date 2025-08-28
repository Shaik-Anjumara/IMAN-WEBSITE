 import { Link } from "react-router-dom";

const GamesPage = () => {
  return (
    <section className="min-h-screen bg-[#f8d6b0] flex flex-col items-center py-12 mt-20">
      <h2 className="text-4xl font-bold text-[#5a2d0c] mb-6">🕌 Games & Quiz</h2>
      <p className="text-lg text-gray-800 mb-8 text-center">
        Play Islamic quizzes, puzzles, and card-matching games!
      </p>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Puzzle Game */}
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-[#b33a3a]">🧩 Puzzle</h3>
          <p className="text-gray-600 mb-4">
            Arrange Surah names in the correct order.
          </p>
          <Link to="/games/puzzle">
            <button className="px-4 py-2 bg-[#b33a3a] text-white rounded-xl shadow hover:bg-[#912828]">
              Play Puzzle
            </button>
          </Link>
        </div>

        {/* Card Match */}
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-[#b33a3a]">🃏 Card Match</h3>
          <p className="text-gray-600 mb-4">
            Match Islamic terms & their meanings.
          </p>
          <Link to="/games/card-match">
            <button className="px-4 py-2 bg-[#b33a3a] text-white rounded-xl shadow hover:bg-[#912828]">
              Play Card Match
            </button>
          </Link>
        </div>

        {/* Quiz */}
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-[#b33a3a]">📖 Quiz</h3>
          <p className="text-gray-600 mb-4">
            Test your Islamic knowledge with fun quizzes.
          </p>
          <Link to="/games/quiz">
            <button className="px-4 py-2 bg-[#b33a3a] text-white rounded-xl shadow hover:bg-[#912828]">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          to="/"
          className="text-[#b33a3a] underline hover:text-[#912828] transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default GamesPage;
