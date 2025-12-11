from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/process", methods=["POST"])
def process():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")

    return jsonify({
        "message": "Data processed successfully!",
        "name": name,
        "email": email
    })

@app.route("/", methods=["GET"])
def check():
    return jsonify({
        "message": "Data processed successfully!"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
