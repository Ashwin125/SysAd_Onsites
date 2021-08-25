from flask import Flask, redirect, request
from flask_mobility import Mobility



app = Flask(__name__)
Mobility(app)

@app.route('/')
def index():

    if request.MOBILE:
        return redirect('http://mobile.loadbalance.local')
           
    return redirect('http://desktop.loadbalance.local')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
