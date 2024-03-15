from sentence_transformers import util

# Return a list of the 3 most similar products, for now only sweaters
# Create 2D structured data later
def find_similar_text(query_desc:str, model, products):
    query_sentence = []
    query_sentence.append(query_desc)

    # Compute embeddings
    query_embeddings = model.encode(query_sentence, convert_to_tensor=True)
    embeddings = model.encode(products, convert_to_tensor=True)

    # Compute cosine-similarities for each sentence with each other sentence
    cosine_scores = util.cos_sim(query_embeddings, embeddings)

    # Find the pairs with the highest cosine similarity scores
    pairs = []
    for i in range(cosine_scores.shape[0]):
        for j in range(cosine_scores.shape[1]):
            pairs.append({"index": [i, j], "score": cosine_scores[i][j]})

    # Sort scores in decreasing order
    pairs = sorted(pairs, key=lambda x: x["score"], reverse=True)

    # Return a list of the 3 most matching indices
    ans = []
    for pair in pairs[0:3]:
        i, j = pair["index"]
        ans.append(j)
    return ans
