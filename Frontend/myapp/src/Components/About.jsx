function About() {
  return (
    <>
      <div className="bg-white text-black py-8">
        {/* Heading with Fade-in Animation */}
        <h1 className="font-bold text-center text-black text-3xl mb-4 animate-fadeIn">
          About Our Project
        </h1>
        <div className="text-center px-4">
          {/* Section Header with Animation */}
          <p className="font-bold text-lg mb-2 animate-slideInLeft">
            Key Features of the Project:
          </p>
          {/* List with Hover and Load Animations */}
          <ul className="list-disc list-inside text-left mx-auto max-w-4xl space-y-4">
            <li className="hover:translate-x-2 transition-transform duration-300">
              <strong>Technical Query-Focused Summarization (TQ-LS):</strong>  
              The model is designed to condense lengthy and complex technical documents into shorter, precise summaries while preserving the essence of the content. This feature is particularly useful for responding to technical queries quickly and effectively.
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              <strong>Machine Translation for Multilingual Communication:</strong>  
              The summarized content is translated into the target language using advanced translation models like Helsinki-NLP/opus-mt-en-hi and barghavani/English_to_Hindi, ensuring fluency and semantic accuracy in multilingual scenarios.
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              <strong>Deep Learning Approach:</strong>  
              By leveraging advanced deep learning algorithms, the model can understand the context and relationships between words, which enhances both the summarization and translation processes.
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              <strong>Simple, Efficient, and Scalable Design:</strong>  
              The model is designed to be lightweight and efficient, making it easy to implement and scale for various applications, from technical documentation to customer support systems.
            </li>
          </ul>

          {/* Impact and Use Cases Section */}
          <p className="font-bold text-lg mt-6 mb-2 animate-slideInRight">
            Impact and Use Cases:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-4xl space-y-4">
            <li className="hover:scale-105 transition-transform duration-300">
              <strong>Bridging Communication Gaps:</strong> The project facilitates seamless communication between individuals or teams speaking different languages, especially in technical fields.
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <strong>Cross-Cultural Understanding:</strong> By enabling multilingual translations, the project promotes collaboration and knowledge sharing across cultures.
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <strong>Improved Query Response:</strong> The summarized and translated outputs are tailored to technical queries, enhancing the efficiency of information retrieval.
            </li>
          </ul>

          {/* Technology Stack Section */}
          <p className="font-bold text-lg mt-6 mb-2 animate-slideInLeft">
            Technology Stack:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-4xl space-y-4">
            <li className="hover:rotate-2 transition-transform duration-300">
              <strong>Natural Language Processing Models:</strong>  
              Helsinki-NLP/opus-mt-en-hi for accurate English-to-Hindi translation and barghavani/English_to_Hindi for improving translation fluency.
            </li>
            <li className="hover:rotate-2 transition-transform duration-300">
              <strong>Deep Learning Techniques:</strong>  
              To ensure the outputs are human-like and contextually relevant.
            </li>
            <li className="hover:rotate-2 transition-transform duration-300">
              <strong>Document Formats Supported:</strong>  
              The model processes input documents in various formats such as text and PDF files.
            </li>
          </ul>

          {/* Conclusion Section */}
          <p className="font-bold text-lg mt-6 mb-2 animate-fadeIn">
            Conclusion:
          </p>
          <p className="text-left mx-auto max-w-4xl animate-fadeIn delay-200">
            This project represents a significant step forward in utilizing NLP for technical query-focused summarization and translation. By condensing complex information into concise summaries and providing accurate translations, the model offers a practical solution to global communication challenges in the technical domain. Its simplicity, efficiency, and focus on meaningful output make it a versatile tool for industries, academics, and organizations seeking to enhance multilingual information sharing.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
