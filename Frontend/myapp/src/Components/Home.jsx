import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      {/* Features Section (same as Services content) */}
      <div className="flex flex-col items-center bg-gray-100 p-16 h-svh w-full rounded-lg shadow-md">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-4">
          Explore the Features of Our Platform
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mb-8 text-lg">
          Our platform leverages cutting-edge technology to provide robust solutions for technical summarization, multilingual communication, and deep learning advancements. Here's what you can expect:
        </p>

        <ul className="space-y-6 max-w-6xl text-gray-800">
          <li className="flex flex-col p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to="/both" className="text-blue-600 text-lg font-semibold mb-1">
              Summarization and Translation:
            </Link>
            <Link to="/completetrans" className="text-blue-600 text-lg font-semibold mb-2">
              Complete Translation:
            </Link>
            <p className="text-gray-700">
              It helps to summarize documents and translate the sentences.
            </p>
          </li>

          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <strong className="text-blue-600 text-lg">
              Technical Query-Focused Summarization (TQ-LS):
            </strong>
            <p className="text-gray-700 mt-2">
              The model condenses lengthy and complex technical documents into shorter, precise summaries while preserving the essence of the content. Perfect for quick and effective technical queries.
            </p>
          </li>

          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to="/translation" className="text-blue-600 text-lg font-semibold block">
              Machine Translation for Multilingual Communication:
            </Link>
            <p className="text-gray-700 mt-2">
              Translates summarized content into the target language using advanced translation models like Helsinki-NLP and Barghavani, ensuring fluency and semantic accuracy in multilingual scenarios.
            </p>
          </li>

          <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to="/summarization" className="text-blue-600 text-lg font-semibold block">
              Query Based Summarization:
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

export default Home;
