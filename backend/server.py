from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.docstore.document import Document
from chatbot import ChatBot
import os



app = Flask(__name__)
CORS(app)
os.environ["OPENAI_API_KEY"] = "ENTER KEY" 
chatbot = ChatBot()
# @app.route('/create_user', methods=['POST'])
# def create_user():
#     # Check if the request has JSON data
#     if request.is_json:
#         # Get the JSON data from the request
#         user_data = request.get_json()

#         # Check if the required fields are present in the JSON data
#         if 'name' in user_data and 'password' in user_data:
#             # Extract name and password from the JSON data
#             name = user_data['name']
#             password = user_data['password']

#             # Print out the user data
#             print(f"User created: Name - {name}, Password - {password}")

#             # Return a response
#             return jsonify({'message': 'User created successfully'})
#         else:
#             return jsonify({'error': 'Invalid payload. Name and password are required.'}), 400
#     else:
#         return jsonify({'error': 'Invalid content type. JSON payload expected.'}), 400

# @app.route('/get_user', methods=['POST'])
# def get_user():
#     pass 


@app.route('/upload_files', methods=['POST'])
def upload_file():
    files = request.files.getlist('files')
    documents = [] 
    for file in files:
        contents = file.read()
        doc = Document(page_content=contents, metadata={"source": "local"})
        documents.append(doc)
    chatbot.upload_documents(documents)

    return jsonify({'message': 'File uploaded successfully'})

@app.route('/get_response', methods=['POST'])
def get_response():
    data = request.json  
    user_input = data.get('userInput')
    res = chatbot.get_response(user_input)  
    response_data = {'result': res}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)