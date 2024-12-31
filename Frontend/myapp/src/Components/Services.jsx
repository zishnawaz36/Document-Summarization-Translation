import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      {/* Welcome Header with Animation */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 shadow-lg rounded-lg mb-8">
        <h1 className="text-4xl font-extrabold mb-2 animate-bounce">
          Welcome to Our Project
        </h1>
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
          {/* Feature 1 */}
          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <strong className="text-blue-600 text-lg">
              Technical Query-Focused Summarization (TQ-LS):
            </strong>
            <p className="text-gray-700 mt-2">
              The model condenses lengthy and complex technical documents into shorter, precise summaries while preserving the essence of the content. Perfect for quick and effective technical queries.
            </p>
          </li>

          {/* Feature 2 */}
          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to="/translation">
            <strong className="text-blue-600 text-lg">
              Machine Translation for Multilingual Communication:
            </strong>
            </Link>
            <p className="text-gray-700 mt-2">
              Translates summarized content into the target language using advanced translation models like Helsinki-NLP and Barghavani, ensuring fluency and semantic accuracy in multilingual scenarios.
            </p>
          </li>

          {/* Feature 3 */}
          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to="/summarization" className="block">
              <strong className="text-blue-600 text-lg">Query Based Summarization:</strong>
            </Link>
            <p className="text-gray-700 mt-2">
              This feature allows users to generate summaries based on specific queries, providing focused and concise information tailored to the user's needs.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Services;
