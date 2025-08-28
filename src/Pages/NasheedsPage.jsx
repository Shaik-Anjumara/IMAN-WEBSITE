 // src/Pages/NasheedsPage.jsx
import { Link } from "react-router-dom";

function NasheedsPage() {
  const nasheeds = [
    { title: "Ya Nabi Salam Alayka", link: "#" },
    { title: "Tala'al Badru Alayna", link: "#" },
    { title: "Burda Sharif", link: "#" },
  ];

  return (
    <div className="bg-[#f6d0a3] min-h-screen py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🎵 Nasheeds</h1>
        <p className="text-gray-600">Listen to beautiful Islamic nasheeds</p>
      </div>

      {/* Cards Layout like GamesPage */}
      <div className="flex justify-center flex-wrap gap-8 px-4">
        {nasheeds.map((nasheed, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {nasheed.title}
            </h3>
            <a
              href={nasheed.link}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Play Nasheed
            </a>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="text-center mt-10">
        <Link to="/" className="text-red-700 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NasheedsPage;
