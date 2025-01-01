from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize summarization models
extractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
abstractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# Initialize translation model
translation_model = pipeline("translation", model="Helsinki-NLP/opus-mt-en-hi")


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/sum_trans', methods=['POST'])
def summarize_trans():
    try:
        # Get the text from the request
        data = request.get_json()
        text = data.get('text', '').strip()

        if not text:
            return jsonify({
                'error': 'No text provided',
                'summary': ''
            }), 400

        # Perform extractive summarization
        key_points = extractive_summarizer(
            text,
            max_length=130,
            min_length=20,
            do_sample=False
        )

        # Perform abstractive summarization
        summary = abstractive_summarizer(
            key_points[0]['summary_text'],
            max_length=80,
            min_length=15,
            do_sample=False
        )

        # Extract the 'summary_text' and perform translation
        summary_text = summary[0]['summary_text']
        translation = translation_model(summary_text)
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
