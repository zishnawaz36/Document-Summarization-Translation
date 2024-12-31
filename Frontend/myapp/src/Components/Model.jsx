import React from 'react';

function Model() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 py-12">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Models</h1>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Summarization Models</h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        In the domain of Natural Language Processing (NLP), summarization is one of the most critical tasks. We use the following models to generate high-quality, accurate summaries:
                    </p>
                    
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">FalconAI</h3>
                        <p className="text-gray-600 text-base">
                            FalconAI is a highly efficient and fast model, primarily known for its superior speed and accuracy. It is particularly useful in text summarization tasks, sentiment analysis, and processing large datasets. FalconAI leverages deep learning techniques to extract the most relevant information from large corpora of text, providing a concise and coherent summary.
                        </p>
                    </div>
                    
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">BART (Bidirectional and Auto-Regressive Transformers)</h3>
                        <p className="text-gray-600 text-base">
                            BART is another powerful summarization model that combines the strengths of both autoregressive and denoising autoencoders. It is capable of generating human-like summaries by considering both the context of the text and any noise or irrelevant information in the input. BART is widely used for tasks such as text generation, summarization, and machine translation.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Translation Model</h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        For machine translation tasks, we utilize advanced neural models that can translate between various language pairs with high accuracy. Below is one of the translation models we rely on:
                    </p>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Helsinki-NLP/opus-mt-en-hi</h3>
                        <p className="text-gray-600 text-base">
                            The <strong>Helsinki-NLP/opus-mt-en-hi</strong> model is a robust machine translation model specifically designed for translating text from English (en) to Hindi (hi). It is part of the OPUS-MT project, which focuses on creating high-quality pre-trained models for numerous language pairs. This model uses a transformer-based architecture to ensure accurate translations, capable of handling a wide range of contexts and expressions. It has been trained on large datasets, ensuring that the translations are not only grammatically correct but also contextually appropriate.
                        </p>
                        <p className="text-gray-600 text-base mt-2">
                            Key Features:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Supports translation from English to Hindi with high accuracy</li>
                            <li>Trained on extensive multilingual datasets</li>
                            <li>Utilizes a transformer architecture for improved context understanding</li>
                            <li>Part of the OPUS-MT project, which aims to make multilingual machine translation accessible</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model;
