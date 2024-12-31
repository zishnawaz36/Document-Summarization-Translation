import React, { useState } from 'react';
import axios from 'axios';

function TextTranslator() {
  const [text, setText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setTranslatedText('');
    setLoading(true);

    try {
      // Increase timeout to 10 seconds
      const response = await axios.post('http://localhost:5000/translate', {
        text,
        source_language: sourceLanguage,
        target_language: targetLanguage,
      }, {
        timeout: 10000,  // Timeout set to 10 seconds
        headers: {
          'Content-Type': 'application/json'  // Set content-type to json
        }
      });

      console.log("Api Response : ", response.data);
      if (response.data.translated_text) {
        setTranslatedText(response.data.translated_text);
      } else {
        setError('No translation returned from the server.');
      }
    } catch (err) {
      setError('An error occurred while translating the text.');
      console.log("Error :", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-4xl p-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Text Translator</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="text" className="block text-lg font-medium text-gray-700 mb-2">
            Text to Translate
          </label>
          <textarea
            id="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="source_language" className="block text-lg font-medium text-gray-700 mb-2">
            Source Language
          </label>
          <select
            id="source_language"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="target_language" className="block text-lg font-medium text-gray-700 mb-2">
            Target Language
          </label>
          <select
            id="target_language"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="hi">Hindi</option>
            <option value="en">English</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </form>

      {translatedText && (
        <div className="mt-6 bg-green-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Translated Text:</h4>
          <p className="text-gray-700">{translatedText}</p>
        </div>
      )}

      {error && (
        <div className="mt-6 bg-red-100 p-4 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}

export default TextTranslator;
