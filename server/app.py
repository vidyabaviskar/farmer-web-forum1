# server/app.py
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat1 import fetch_website_content, extract_pdf_text, initialize_vector_store
from chat2 import llm, setup_retrieval_qa

app = Flask(__name__)
CORS(app)

# Example URLs and PDF files
urls = ["https://mospi.gov.in/4-agricultural-statistics"]  
pdf_files = ["Data/Farming Schemes.pdf", "Data/farmerbook.pdf"]

# Fetch content from websites
website_contents = [fetch_website_content(url) for url in urls]

# Extract text from PDF files
pdf_texts = [extract_pdf_text(pdf_file) for pdf_file in pdf_files]

# Combine all content into chunks
all_contents = website_contents + pdf_texts

# Initialize the vector store
db = initialize_vector_store(all_contents)

# Set up the RetrievalQA chain
chain = setup_retrieval_qa(db)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to Farmer Web Forum backend!"})

@app.route('/about')
def about():
    return jsonify({"message": "Welcome to Farmer Web Forum About Us page!"})

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

@app.route('/api/chat', methods=['GET'])
def chat():
    # Fetch dashboard data here
    return jsonify({"message": "Farmer chatbot"})

@app.route('/api/contact', methods=['GET'])
def contact():
    # Fetch dashboard data here
    return jsonify({"message": "Farmer Portal Contact"})

@app.route('/ask', methods=['POST'])
def ask():
    query = request.form['messageText'].strip().lower()

    if query in ["who developed you?", "who created you?", "who made you?"]:
        return jsonify({"answer": "I was developed by Vidya Baviskar."})
    
    response = chain(query)
    return jsonify({"answer": response['result']})

if __name__ == '__main__':
    app.run(debug=True)
