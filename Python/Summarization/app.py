from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from transformers import pipeline

app = Flask(__name__)

# Enable CORS for all origins (you can specify your frontend URL here for security)
CORS(app, resources={r"/*": {"origins": "http://localhost:3001"}})  # React app's origin

# Initialize the summarization pipelines
extractive_summarizer = pipeline("summarization", model="Falconsai/text_summarization")
abstractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        data = request.get_json()
        text = data.get('text', '').strip()

        if not text:
            return jsonify({'error': 'No text provided'}), 400

        # Extractive summarization
        key_points = extractive_summarizer(text, max_length=130, min_length=20, do_sample=False)
        
        # Abstractive summarization
        summary = abstractive_summarizer(key_points[0]['summary_text'], max_length=80, min_length=15, do_sample=False)

        return jsonify({
            'original_text': text,
            'extractive_summary': key_points[0]['summary_text'],
            'final_summary': summary[0]['summary_text'],
            'error': ''
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
