import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderOne from "./Header1";

const lines = [
  "DocuLingua is a full-stack intelligent web application designed for real-time document summarization and multilingual translation using advanced NLP models.",
  "The summarization module leverages a fine-tuned BART transformer model, based on BERT architecture, to extract concise summaries from long-form documents.",
  "For translation, the system integrates Helsinki-NLP's Opus-MT models, supporting a wide range of language pairs with high-quality results.",
  "The backend is built using Flask for model processing and API handling, while Node.js with Express manages user authentication, registration, and request routing.",
  "Data is securely stored in MongoDB using Mongoose, and JWT tokens are used for secure user login and access control.",
  "The frontend is created using React.js, styled with Tailwind CSS, and structured with reusable components for modularity and performance.",
  "JavaScript hooks such as useState and useEffect manage state and animation flow. Form inputs are validated and animated for smooth user interaction.",
  "Users can submit raw text or upload PDF files, both of which are processed through Flask endpoints with CORS enabled for safe cross-origin communication.",
  "The application offers a responsive layout, clean UI, and supports scalable integration with cloud-based hosting and future NLP enhancements."
];

function MainHome() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeaderOne />
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl p-10 overflow-y-auto h-[80vh]">
          <h1 className="text-3xl font-bold mb-6 text-center text-cyan-700">
            🚀 DocuLingua: NLP-Based Document Summarization & Translation Tool
          </h1>

          <div className="text-base md:text-lg leading-relaxed space-y-4 font-bold text-gray-800">
            {lines.slice(0, visibleLines).map((line, index) => (
              <p
                key={index}
                className="transition-opacity duration-700 ease-in opacity-100"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-10">
            <Link to="/login">
              <button className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-2 rounded-lg text-white font-medium shadow-lg">
                🚀 Start Now
              </button>
            </Link>
            <Link to="/details">
              <button className="bg-gray-700 hover:bg-gray-800 transition px-6 py-2 rounded-lg text-white font-medium shadow-lg">
                📄 Project Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
