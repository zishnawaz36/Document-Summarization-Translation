
import React, { useState } from "react";
import axios from "axios";

function SummaryandTranslation() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState({
    originalText: "",
    summaryText: "",
    translatedText: "",
  });
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      alert("Please enter some text!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/sum_trans", { text: inputText });
      const { original_text, final_summary, translation } = response.data;
      console.log("Api Response :",response.data);
      setResults({
        originalText: original_text || "N/A",
        summaryText: final_summary || "N/A",
        translatedText: translation || "N/A",
      });
      setShowResults(true);
    } catch (error) {
      console.log("Error we get is :",error.message);
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Combined Summarizer & Translator
      </h1>
      <p className="text-center text-gray-500">
        Generate a summary of your text and translate it into Hindi.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="inputText" className="block text-gray-700 font-medium">
              Enter your text
            </label>
            <textarea
              className="w-full mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="inputText"
              rows="5"
              placeholder="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300"
          >
            Summarize & Translate
          </button>
        </form>
      </div>

      {showResults && (
        <div className="mt-8">
          <h3 className="text-center text-xl font-semibold text-gray-800">Results</h3>
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <p className="font-semibold text-gray-700">Original Text:</p>
            <p className="text-gray-600">{results.originalText}</p>
            <hr className="my-4" />
            <p className="font-semibold text-gray-700">Summary:</p>
            <p className="text-gray-600">{results.summaryText}</p>
            <hr className="my-4" />
            <p className="font-semibold text-gray-700">Translated Text:</p>
            <p className="text-gray-600">{results.translatedText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SummaryandTranslation;