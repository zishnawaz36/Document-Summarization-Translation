import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Model() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Models</h1>

                {/* Link to Diagram Page */}
                <div className="text-center mb-8">
                    <Link to="/dia">
                        <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                            Graph
                        </button>
                    </Link>
                </div>

                {/* Summarization Models Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Summarization Models</h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        In the domain of Natural Language Processing (NLP), summarization is one of the most critical tasks. We use the following models to generate high-quality, accurate summaries:
                    </p>

                    {/* FalconAI */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">FalconAI</h3>
                        <p className="text-gray-700 leading-relaxed">
                            FalconAI is a highly efficient and fast model, known for its superior speed and accuracy. It excels at text summarization, sentiment analysis, and processing large datasets by leveraging deep learning to extract relevant information and create concise summaries.
                        </p>
                    </div>

                    {/* BART */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">BART (Bidirectional and Auto-Regressive Transformers)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            BART combines autoregressive and denoising autoencoders to generate human-like summaries. It handles noisy or irrelevant input data, making it widely used for text generation, summarization, and machine translation.
                        </p>
                    </div>
                </section>

                {/* Translation Models Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Translation Model</h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        For machine translation tasks, we rely on advanced neural models to translate various language pairs accurately. Below is one of our translation models:
                    </p>

                    {/* Helsinki-NLP/opus-mt-en-hi */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Helsinki-NLP/opus-mt-en-hi</h3>
                        <p className="text-gray-700 leading-relaxed">
                            This robust model translates text from English to Hindi with high accuracy. Part of the OPUS-MT project, it leverages a transformer-based architecture to provide grammatically and contextually correct translations.
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700 leading-relaxed">
                            <li>Supports translation from English to Hindi with high accuracy</li>
                            <li>Trained on extensive multilingual datasets</li>
                            <li>Utilizes a transformer architecture for improved context understanding</li>
                            <li>Part of the OPUS-MT project to promote multilingual machine translation</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Model;
