from flask import Flask, request, jsonify, render_template
from transformers import pipeline
from flask_cors import CORS  # Add CORS support

app = Flask(__name__)  # Fixed _name_ to __name__
CORS(app)  # Enable CORS for all routes

# Translation function
def translate_text(text, source_language="en", target_language="hi"):
    # Initialize the translation pipeline
    translator = pipeline("translation", model=f"Helsinki-NLP/opus-mt-{source_language}-{target_language}")
    # Translate the text
    translated = translator(text, max_length=400)
    return translated[0]['translation_text']

# Flask route for the translation page
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json  # Use request.json for parsing JSON data
    text = data.get('text', '')
    source_language = data.get('source_language', 'en')
    target_language = data.get('target_language', 'hi')
    translated_text = translate_text(text, source_language, target_language)
    return jsonify({"translated_text": translated_text})

if __name__ == '__main__':
    app.run(debug=True)
