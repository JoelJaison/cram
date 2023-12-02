from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

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
    # if 'files' not in request.files:
    #     return jsonify({'error': 'No file part'})
    files = request.files.getlist('files')
    
    for file in files:
        print(file.read())

    # If the user does not select a file, the browser submits an empty part without a filename
    # if file.filename == '':
    #     return jsonify({'error': 'No selected file'})

    # # You can access the file data using file.stream.read()
    # # Perform further processing (e.g., save to disk, extract text, etc.)

    # # Respond with a success message
    return jsonify({'message': 'File uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)