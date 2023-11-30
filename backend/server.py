from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/create_user', methods=['POST'])
def create_user():
    # Check if the request has JSON data
    if request.is_json:
        # Get the JSON data from the request
        user_data = request.get_json()

        # Check if the required fields are present in the JSON data
        if 'name' in user_data and 'password' in user_data:
            # Extract name and password from the JSON data
            name = user_data['name']
            password = user_data['password']

            # Print out the user data
            print(f"User created: Name - {name}, Password - {password}")

            # Return a response
            return jsonify({'message': 'User created successfully'})
        else:
            return jsonify({'error': 'Invalid payload. Name and password are required.'}), 400
    else:
        return jsonify({'error': 'Invalid content type. JSON payload expected.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
