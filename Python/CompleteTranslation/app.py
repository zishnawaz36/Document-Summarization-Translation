from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize summarization models
extractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
abstractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# Initialize translation models
translation_model_hi = pipeline("translation", model="Helsinki-NLP/opus-mt-en-hi")  # English to Hindi
translation_model_bn = pipeline("translation", model="Helsinki-NLP/opus-mt-en-bn")  # English to Bengali

@app.route('/')
def index():
    return render_template('index.html')  # Serve the HTML page (ensure index.html exists)

@app.route('/sum_trans', methods=['POST'])
def summarize_trans():
    try:
        # Get the text and language preference (hi or bn) from the request
        data = request.get_json()
        text = data.get('text', '').strip()
        language = data.get('language', 'hi').strip()  # Default to Hindi if no language is specified

        if not text:
            return jsonify({
                'error': 'No text provided',
                'summary': ''
            }), 400

        # Dynamically adjust max_length based on the input length to avoid warnings
        input_length = len(text.split())
        max_length = min(130, input_length + 10)  # Set max_length to be no longer than the input length plus 10 words

        # Perform extractive summarization
        key_points = extractive_summarizer(
            text,
            max_length=max_length,
            min_length=20,
            do_sample=False
        )

        # Perform abstractive summarization
        summary = abstractive_summarizer(
            key_points[0]['summary_text'],
            max_length=min(80, input_length + 10),  # Adjust max_length similarly for the abstract summarization
            min_length=15,
            do_sample=False
        )

        # Extract the 'summary_text' for translation
        summary_text = summary[0]['summary_text']

        # Perform translation based on the selected language
        if language == 'bn':
            translation = translation_model_bn(summary_text)
        else:  # Default to Hindi translation
            translation = translation_model_hi(summary_text)

        translated_text = translation[0]['translation_text']

        # Return the summary and translation
        return jsonify({
            'original_text': text,
            'extractive_summary': key_points[0]['summary_text'],
            'final_summary': summary_text,
            'translation': translated_text,
            'error': ''
        })

    except Exception as e:
        return jsonify({
            'error': str(e),
            'summary': ''
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)
