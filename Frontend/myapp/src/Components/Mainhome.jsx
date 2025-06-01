import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeaderOne from "./Header1";

const lines = [
  "Developed a full-stack web application that performs real-time document summarization using the BERT (BART variant) model and language translation using the Helsinki-NLP model.",
  "The backend was implemented with Flask for handling NLP processing and Node.js with Express for user authentication and registration, integrated with MongoDB for data storage.",
  "The frontend was built using React.js, styled with Tailwind CSS, and enhanced with JavaScript for dynamic UI interactions.",
  "The tool supports both PDF and text inputs and delivers a seamless, scalable user experience for summarizing and translating documents efficiently."
];

function MainHome() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 1000); // 1 second per line
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <HeaderOne/>
      <div className="bg-gradient-to-t bg-gray-900 to-black h-screen overflow-hidden">
        <div className="flex justify-between">
            <div className="bg-slate-900 text-white h-96 w-full p-4 overflow-auto ">
          <h1 className="text-lg font-bold mb-2">
            DocuLingua: An NLP-Powered Assistant for Summarizing and Translating Documents
          </h1>
          <div className="text-lg leading-relaxed">
            {lines.slice(0, visibleLines).map((line, index) => (
              <p key={index} className="mb-2 animate-fadeIn">{line}</p>
            ))}
          </div>
          <div className="flex gap-x-10 mt-8">
            <button className="bg-cyan-500 text-white rounded-lg px-4 py-2">Start</button>
            <button className="bg-cyan-500 text-white rounded-lg px-4 py-2">Details</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
