function About() {
  return (
    <>
      <div className="bg-white text-black py-8">
        {/* Heading Section */}
        <h1 className="font-bold text-center text-black text-3xl mb-8 animate-fadeIn">
          About Our Project
        </h1>

        {/* Table Section */}
        <div className="overflow-x-auto px-4">
          <table className="table-auto border-collapse border border-gray-300 w-full max-w-6xl mx-auto shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-bold">
                  Section
                </th>
                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-bold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Key Features Section */}
              <tr className="hover:bg-gray-50 transition duration-200">
                <td className="border border-gray-300 px-6 py-4 font-bold">
                  Key Features
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Technical Query-Focused Summarization (TQ-LS):</strong>  
                      Condenses lengthy technical documents into concise summaries.
                    </li>
                    <li>
                      <strong>Machine Translation:</strong>  
                      Translates summaries into multiple languages with fluency and semantic accuracy.
                    </li>
                    <li>
                      <strong>Deep Learning Approach:</strong>  
                      Enhances summarization and translation through advanced algorithms.
                    </li>
                    <li>
                      <strong>Simple, Efficient Design:</strong>  
                      Lightweight and scalable for various applications.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Impact and Use Cases Section */}
              <tr className="hover:bg-gray-50 transition duration-200">
                <td className="border border-gray-300 px-6 py-4 font-bold">
                  Impact and Use Cases
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Bridging Communication Gaps:</strong>  
                      Facilitates seamless multilingual communication in technical fields.
                    </li>
                    <li>
                      <strong>Cross-Cultural Understanding:</strong>  
                      Promotes collaboration across cultures.
                    </li>
                    <li>
                      <strong>Improved Query Response:</strong>  
                      Enhances information retrieval for technical queries.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Technology Stack Section */}
              <tr className="hover:bg-gray-50 transition duration-200">
                <td className="border border-gray-300 px-6 py-4 font-bold">
                  Technology Stack
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>NLP Models:</strong>  
                      Uses Helsinki-NLP/opus-mt-en-hi for English-to-Hindi translation.
                    </li>
                    <li>
                      <strong>Deep Learning Techniques:</strong>  
                      Ensures contextually relevant, human-like outputs.
                    </li>
                    <li>
                      <strong>Supported Document Formats:</strong>  
                      Processes text and PDF files.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Conclusion Section */}
              <tr className="hover:bg-gray-50 transition duration-200">
                <td className="border border-gray-300 px-6 py-4 font-bold">
                  Conclusion
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  This project leverages NLP for technical summarization and translation, 
                  offering concise summaries and accurate translations to enhance global 
                  communication in technical domains.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default About;
