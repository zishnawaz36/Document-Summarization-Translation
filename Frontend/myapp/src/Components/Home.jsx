import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Welcome Header with Animation */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 shadow-lg rounded-lg mb-8">
        <h1 className="text-4xl font-extrabold mb-2 animate-bounce">
          Welcome to Our Project
        </h1>
        <p className="text-lg font-medium">
          Please login for further details to explore our amazing features!
        </p>
      </div>

      {/* Login Button with Animation */}
      <div className="flex justify-center mb-8">
        <Link to="/login">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold shadow-md transform transition-all hover:scale-110 hover:bg-blue-600 hover:text-white animate-pulse">
            Login Now
          </button>
        </Link>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center bg-gray-100 p-8 h-auto w-full rounded-lg shadow-md">
        {/* Introduction */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Explore the Features of Our Platform
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mb-8">
          Our platform leverages cutting-edge technology to provide robust solutions for technical summarization, multilingual communication, and deep learning advancements. Here's what you can expect:
        </p>

        {/* Features List */}
        <ul className="space-y-6 max-w-4xl text-gray-800">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <strong className="text-blue-600 text-lg">
              Technical Query-Focused Summarization (TQ-LS):
            </strong>
            <p className="text-gray-700 mt-2">
              The model condenses lengthy and complex technical documents into shorter, precise summaries while preserving the essence of the content. Perfect for quick and effective technical queries.
            </p>
          </li>

          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <strong className="text-blue-600 text-lg">
              Machine Translation for Multilingual Communication:
            </strong>
            <p className="text-gray-700 mt-2">
              Translates summarized content into the target language using advanced translation models like Helsinki-NLP and Barghavani, ensuring fluency and semantic accuracy in multilingual scenarios.
            </p>
          </li>

          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <strong className="text-blue-600 text-lg">
              Deep Learning Approach:
            </strong>
            <p className="text-gray-700 mt-2">
              Leveraging advanced deep learning algorithms to understand context and relationships between words, enhancing summarization and translation processes.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
