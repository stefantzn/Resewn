from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
import os
from RankSimilar import find_similar_text
from sentence_transformers import SentenceTransformer

# Load model
model = SentenceTransformer("all-mpnet-base-v2")

# app instance
app = Flask(__name__)
CORS(app)

# Get data
def make_list_desc(reference: str):
    with open(reference) as f:
        str_lst = f.read().splitlines()
    lst = [] # This is the syntax to add dictionaries
    for line in str_lst:
        lst.append(line)
    return lst
# Note that the structure of the SweaterDesc.txt and images have to be very specific
# they must correspond to each other.
sweater_desc = make_list_desc("SweaterDesc.txt")
pants_desc = make_list_desc("PantsDesc.txt")

# Get the names of the product
sweater_names = make_list_desc("SweaterNames.txt")
pants_names = make_list_desc("PantsNames.txt")

# Route only for /api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    # Structured data
    return jsonify({
        'message': "Here is a custom message",
        'people': ['Jack', 'Harry', 'Harry']
    })

# Route to query similar images
@app.route("/api/query-similar", methods=['POST'])
def query_similar():
    request_data = request.get_json()
    data = request_data['preferences']
    sweater_index_list = find_similar_text(data, model, sweater_desc)
    pants_index_list = find_similar_text(data, model, pants_desc)
    sweater_paths = []
    sweater_names_return = []
    for index in sweater_index_list:
        sweater_paths.append("Sweater/" + str(index + 1) + ".png")
        sweater_names_return.append(sweater_names[index])
    pants_paths = []
    pants_names_return = []
    for index in pants_index_list:
        pants_paths.append("Pants/" + str(index + 1) + ".png")
        pants_names_return.append(pants_names[index])
    subscription_suggest_return = []
    for index in range(len(sweater_names_return)):
        pair = []
        pair.append(sweater_names_return[index])
        pair.append(pants_names_return[index])
        subscription_suggest_return.append(pair)
    
    
    return jsonify({
        'sweaterImages': sweater_paths,
        'pantsImages': pants_paths,
        'subscriptionSuggest': subscription_suggest_return,
    })

# Route to have images on the backend
basedir = os.path.abspath(os.path.dirname(__file__))
uploads_path = os.path.join(basedir, "Clothes_Sample")

@app.route("/api/images/<path:filename>")
def serve_image(filename):
    return send_from_directory(uploads_path, filename)

if __name__ == "__main__":
    app.run(debug=True, port=8080) # remove debug tag in production