import json
from flask import Flask, request, jsonify
from serpapi import search
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/search', methods=['GET'])
def search_events():
    query = request.args.get('query')
    if not query:
        return jsonify({"error": "Query parameter is required"}), 400

    params = {
        "engine": "google_events",
        "q": query,
        "hl": "en",
        "gl": "us",
        "api_key": "SERPAPI-KEY"
    }

    searchs = search(params)
    results = searchs.as_dict()
    events_results = results.get("events_results", [])

    return jsonify(events_results)

if __name__ == '__main__':
    app.run(port=5000)
