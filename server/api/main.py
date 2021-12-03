#main.py
from flask import Flask, make_response, jsonify, request
from models import ma, db, User, user_schema, users_schema, Transaction, transaction_schema, transactions_schema, Reward, reward_schema, rewards_schema

app = Flask(__name__)

# Google Cloud SQL (change this accordingly)
PASSWORD ="#"
PUBLIC_IP_ADDRESS ="#"
DBNAME ="#"
PROJECT_ID ="#"
INSTANCE_NAME ="#"
CONNECTION_NAME = "#"

# configuration
app.config["SECRET_KEY"] = "#"
app.config["SQLALCHEMY_DATABASE_URI"]= "#"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]= True

db.init_app(app)
ma.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/api/register', methods =['POST'])
def register():
  user = request.get_json()
  user = User(name = user["name"],email = user["email"], type=user["type"], phone=user["phone"])
  #adding the fields to users table
  db.session.add(user)
  db.session.commit()
  responseObject = {
      'status' : 'success',
      'message': 'Successfully registered.'
  }
  return make_response(responseObject, 200)

#but only email can be used since email is uniue in firebase
#fetch business_id for a given email+user type
@app.route('/api/business_id', methods =['GET'])
def business_id():
  business_id = User.query.filter(
    User.email == request.args["email"] and User.type == request.args["type"]
    ).first().id
  return jsonify(business_id)


#fetch list of customers for a given business_id
@app.route('/api/customers', methods =['GET'])
def customers():
  customers = Reward.query.filter( Reward.businessId == request.args["business_id"]).all()
  return jsonify(rewards_schema.dump(customers)) 

#adds a new transaction between a business and a customer
@app.route('/api/add_transaction', methods =['POST'])
def add():
  transaction_details = request.get_json()

  #add the entry to transaction table
  transaction = Transaction(
    businessId = transaction_details["business_id"],
    customerId = transaction_details["customer_id"], 
    reward = 100, 
    redeem = transaction_details["redeem_amount"],
    transactionAmount = transaction_details["transaction_amount"])

  # update the customer rewards table
  db.session.add(transaction)
  db.session.commit()
  responseObject = {
      'status' : 'success',
      'message': 'Successfully added transaction.'
  }
  return make_response(responseObject, 200)

#fetch list of customers for a given business_id
@app.route('/api/users', methods =['GET'])
def users():
  users = User.query.all()
  return jsonify(users_schema.dump(users)) 

if __name__ == '__main__':
  app.run(debug=True)
