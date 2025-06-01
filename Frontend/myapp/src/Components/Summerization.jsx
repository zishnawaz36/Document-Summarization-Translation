import React, { useState } from "react";

function SummarizationTool() {
  const [inputText, setInputText] = useState("");
  const [finalSummary, setFinalSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const summarizeText = async () => {
    if (inputText.trim() === "") {
      setError("Please enter some text to summarize.");
      setFinalSummary("");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch summarization results.");
      }

      const data = await response.json();
      setFinalSummary(data.final_summary || "No summary available.");
    } catch (err) {
      setError(err.message);
      setFinalSummary("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          📝 Advanced Text Summarization Tool
        </h1>

        <textarea
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700 text-lg mb-4"
          rows="6"
          placeholder="Enter your text here to generate a summary..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button
          onClick={summarizeText}
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {finalSummary && !error && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Final Summary</h2>
            <div className="p-4 border-2 border-gray-300 bg-gray-50 rounded-lg min-h-[100px]">
              <p className="text-gray-700">{finalSummary}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SummarizationTool;
