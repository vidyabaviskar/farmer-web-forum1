# server/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows React frontend to talk to Flask

@app.route('/')
def index():
    return jsonify({"message": "Welcome to Farmer Web Forum backend!"})

@app.route('/api/register', methods=['POST'])
def register():
    # Registration logic here
    return jsonify({"message": "Registration successful"})

@app.route('/api/login', methods=['POST'])
def login():
    # Login logic here
    return jsonify({"message": "Login successful"})

@app.route('/api/dashboard', methods=['GET'])
def dashboard():
    # Fetch dashboard data here
    return jsonify({"message": "Farmer dashboard data"})

if __name__ == '__main__':
    app.run(debug=True, port=8000)
