from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120))
    city = db.Column(db.String(80))
    contact = db.Column(db.String(20))
    country = db.Column(db.String(80))

@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User added'}), 201

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([u.__dict__ for u in users if '_sa_instance_state' not in u.__dict__])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
