from flask import Flask , request
from flask_cors import CORS , cross_origin
from json import loads

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/' , methods=['POST'])
@cross_origin()
def home():
    data = loads(request.data.decode('utf-8'))
    print(data['values'])
    return 'homepage'

if __name__ == '__main__':
    app.run()