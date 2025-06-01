from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize summarization pipeline
try:
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
except Exception as e:
    print(f"Error loading model: {str(e)}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        data = request.get_json()
        text = data.get('text', '').strip()

        if not text:
            return jsonify({
                'error': 'No text provided for summarization.',
                'summary': ''
            }), 400

        # Perform summarization
        summary = summarizer(text, max_length=100, min_length=30, do_sample=False)

        return jsonify({
            'original_text': text,
            'summary': summary[0]['summary_text'],
            'error': ''
        })

    except Exception as e:
        return jsonify({
            'error': f"An error occurred: {str(e)}",
            'summary': ''
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
