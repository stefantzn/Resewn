# Backend Guide

You might want to create a Python virtual environment before running the following commands
```
virtualenv venv
source venv/bin/activate
```
In order to compile the backend, first install the necessary dependencies
```
pip install "sentence-transformers==2.2.2"
pip install --force-reinstall "transformers==4.26.1"
pip install flask flask-cors
```

Then we run the backend on localhost:8080, by running the command
```
python3 server.py
```

From there you can access the api endpoints
* /api/home: Testing for proof of concept
* /api/query-similar: POST method, feed in a "preferences" tag in a JSON and get the most similar image text
* /api/images/\<path:filename>: Get the image stored in the backend
