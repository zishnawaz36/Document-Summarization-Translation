from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Allow CORS for React frontend (localhost:3000)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        # Get the data from the POST request
        data = request.get_json()
        text = data.get('text', '')

        # Add your summarization logic here (placeholder for now)
        summarized_text = f"Summarized: {text}"

        return jsonify({"summarized_text": summarized_text})

    except Exception as e:
        # Return an error message if something goes wrong
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
