from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from transformers import pipeline, MBartForConditionalGeneration, MBart50TokenizerFast

app = Flask(__name__)
CORS(app)

# Summarization Pipelines
extractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
abstractive_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# Hindi Translation
translation_model_hi = pipeline("translation_en_to_hi", model="Helsinki-NLP/opus-mt-en-hi")

# Bengali Translation using MBART
mbart_model_name = "facebook/mbart-large-50-many-to-many-mmt"
mbart_tokenizer = MBart50TokenizerFast.from_pretrained(mbart_model_name)
mbart_model = MBartForConditionalGeneration.from_pretrained(mbart_model_name)

def translate_to_bengali(text):
    mbart_tokenizer.src_lang = "en_XX"
    encoded = mbart_tokenizer(text, return_tensors="pt")
    generated_tokens = mbart_model.generate(
        **encoded,
        forced_bos_token_id=mbart_tokenizer.lang_code_to_id["bn_IN"],
        max_length=100
    )
    translation = mbart_tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)[0]
    return translation

@app.route('/')
def index():
    return render_template('index.html')  # Optional front-end

@app.route('/sum_trans', methods=['POST'])
def summarize_trans():
    try:
        data = request.get_json()
        text = data.get('text', '').strip()
        language = data.get('language', 'hindi').strip().lower()

        if not text:
            return jsonify({'error': 'No text provided'}), 400

        input_length = len(text.split())
        max_length = min(130, input_length + 10)

        # Extractive summary
        key_points = extractive_summarizer(text, max_length=max_length, min_length=20, do_sample=False)
        extractive_summary = key_points[0]['summary_text']

        # Abstractive summary
        summary = abstractive_summarizer(
            extractive_summary,
            max_length=min(80, input_length + 10),
            min_length=15,
            do_sample=False
        )
        summary_text = summary[0]['summary_text']

        # Translation
        if language == 'bengali':
            translated_text = translate_to_bengali(summary_text)
        else:  # Default to Hindi
            translated = translation_model_hi(summary_text)
            translated_text = translated[0]['translation_text']

        return jsonify({
            'original_text': text,
            'summary': summary_text,
            'translation': translated_text
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)
