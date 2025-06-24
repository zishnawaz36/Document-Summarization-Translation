function DetailsaboutProject() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-pink-100 p-6 overflow-x-auto font-bold">
        {/* Single wide container for all content */}
        <div className="min-w-[1200px] bg-white text-gray-800 rounded-2xl shadow-xl p-6 space-y-8 mx-auto">
          
          <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">
            📘 Project Overview: DocuLingua
          </h1>

          <section>
            <p>
              <strong>DocuLingua</strong> is an advanced, intelligent, full-stack web application developed to simplify and automate the tasks of document summarization and multilingual translation. It offers an efficient and accurate solution to digest information quickly while supporting seamless communication across language barriers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🎯 Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Real-time summarization using transformer models</li>
              <li>Multilingual translation with support for various languages</li>
              <li>User authentication with JWT tokens</li>
              <li>PDF and raw text document support</li>
              <li>Responsive UI with smooth animations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🔬 NLP Models Used</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>BART:</strong> Summarization model based on BERT</li>
              <li><strong>Helsinki-NLP Opus-MT:</strong> Neural machine translation model</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🏗️ Architecture</h2>
            <h3 className="text-xl font-semibold mt-4">Frontend</h3>
            <p>Built with React.js and Tailwind CSS using React Hooks.</p>
            <h3 className="text-xl font-semibold mt-4">Backend</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Node.js + Express:</strong> Authentication & MongoDB</li>
              <li><strong>Flask:</strong> NLP processing using Hugging Face models</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">📂 File Handling</h2>
            <p>Supports plain text and PDF uploads.processed for summarization and translation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🛡️ Security & Authentication</h2>
            <p>Uses JWT for secure login. Passwords are hashed. Flask APIs are CORS-enabled.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">📱 UI Design</h2>
            <p>Tailwind CSS ensures responsiveness, clean layout, and fast prototyping with reusable components.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🚀 Deployment Strategy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Frontend:</strong> Vercel / Netlify</li>
              <li><strong>Node.js Backend:</strong> Heroku / Render / Railway</li>
              <li><strong>Flask API:</strong> PythonAnywhere / VPS</li>
              <li><strong>Database:</strong> MongoDB Atlas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🔧 Challenges Faced</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Flask + Express integration</li>
              <li>Async frontend-backend communication</li>
              <li>Handling large input files</li>
              <li>CORS configuration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">📈 Future Improvements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Speech-to-text & text-to-speech integration</li>
              <li>Grammar and plagiarism detection</li>
              <li>Multilingual real-time chat</li>
              <li>User dashboard for document management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">✅ Conclusion</h2>
            <p>
              DocuLingua combines modern web technologies and NLP to deliver a real-world solution for document processing. With scalable architecture and secure design, it is ideal for academic, business, and SaaS platforms.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

export default DetailsaboutProject;
