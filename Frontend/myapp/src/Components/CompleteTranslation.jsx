import React, { useState } from "react";
import axios from "axios";

function TranslateSummarizeUI() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState({
    originalText: "",
    summaryText: "",
    translatedText: "",
  });
  const [lang, setLang] = useState("hindi");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      alert("Please enter some text!");
      return;
    }

    setLoading(true);
    setShowResults(false);

    try {
      const summarizeResponse = await axios.post("http://localhost:8080/summarize", {
        text: inputText,
      });

      const { original_text, summary } = summarizeResponse.data;

      const translateResponse = await axios.post("http://localhost:8080/translate", {
        text: inputText,
        target_lang: lang,
      });

      const { translation } = translateResponse.data;

      setResults({
        originalText: original_text || "N/A",
        summaryText: summary || "N/A",
        translatedText: translation || "N/A",
      });

      setShowResults(true);
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setShowResults(false);
    setResults({ originalText: "", summaryText: "", translatedText: "" });
  };

  return (
    <div className="container mx-auto max-w-2xl mt-10 px-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
        Text Summarizer & Translator
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Enter your text to get a summary and translation in Hindi or Bengali.
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="inputText" className="block text-gray-700 font-medium mb-1">
            Enter Text
          </label>
          <textarea
            id="inputText"
            rows="5"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Select Language</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="hindi">Hindi</option>
            <option value="bengali">Bengali</option>
          </select>
        </div>

        <div className="flex justify-between gap-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Processing..." : "Summarize & Translate"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Clear
          </button>
        </div>
      </form>

      {showResults && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Results</h2>

          <div>
            <p className="font-semibold text-gray-700">Original Text:</p>
            <p className="text-gray-600">{results.originalText}</p>
          </div>
          <hr />
          <div>
            <p className="font-semibold text-gray-700">Summary:</p>
            <p className="text-gray-600">{results.summaryText}</p>
          </div>
          <hr />
          <div>
            <p className="font-semibold text-gray-700">Translated Text:</p>
            <p className="text-gray-600">{results.translatedText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TranslateSummarizeUI;
