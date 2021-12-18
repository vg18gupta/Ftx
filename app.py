#main.py
from flask import Flask, make_response, jsonify, request, send_from_directory
from models import ma, db, User, user_schema, users_schema, Transaction, transaction_schema, transactions_schema, Reward, reward_schema, rewards_schema
from flask_cors import CORS
app = Flask(__name__,static_folder='client/build/',static_url_path='')
CORS(app)

import vonage
client = vonage.Client(key="", secret="")
sms = vonage.Sms(client)
def send_sms(phone):
  print(phone)
  responseData = sms.send_message(
      {
          "from": "Vonage APIs",
          "to": phone,
          "text": "Congrats!You received rewards for your recent TXN! Register at https://ftx-rewardo-client.herokuapp.com/ to claim your rewards.",
      }
  )

  if responseData["messages"][0]["status"] == "0":
      print("Message sent successfully.")
  else:
      print(f"Message failed with error: {responseData['messages'][0]['error-text']}")


#Postgresql Addition
app.config["SQLALCHEMY_DATABASE_URI"]= ""
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]= True

db.init_app(app)
ma.init_app(app)
with app.app_context():
    db.create_all()


@app.route('/api/register', methods =['POST'])
def register():
  user = request.get_json()
  print(user)
  new_user = User(name = user["name"],email = user["email"], type=user["type"], phone=user["phone"])
  db.session.add(new_user)
  db.session.commit()

  if user["isNotify"]:
    send_sms("91"+user["phone"])

  responseObject = {
      'status' : 'success',
      'message': 'Successfully registered.'
  }
  return make_response(responseObject, 200)

#fetch business_id for a given email+user type
#but only email can be used since email is unique in firebase
@app.route('/api/id', methods =['GET'])
def business_id():
  business_id = User.query.filter(User.email == request.args["email"]).first().id
  return jsonify(business_id)


#fetch list of customers for a given business_id
@app.route('/api/customers', methods =['GET'])
def customers():
  customers = Reward.query.filter( Reward.businessId == request.args["business_id"]).all()
  return jsonify(rewards_schema.dump(customers)) 

@app.route('/api/global_customers', methods =['GET'])
def global_customers():
  customers = User.query.filter(User.type == "Customer").all()

  response_list = []
  for customer in customers:
    #if customer hasn't visited this business, return 0 rewards, else return existing reward
    existing_customer = db.session.query(Reward).get({
      "customerId" : customer.id,
      "businessId" : int(request.args["business_id"])
    })
    customer_dict = {
        "id": customer.id,

        "name": customer.name,
        "email": customer.email,
        "phone": customer.phone
      }
    if(existing_customer is None):
      customer_dict["reward"] = 0
    else:
      customer_dict["reward"] = existing_customer.current_reward
    response_list.append(customer_dict)
    
  return jsonify(response_list) 

#adds a new transaction between a business and a customer
@app.route('/api/add_transaction', methods =['POST'])
def add():
  transaction_details = request.get_json()

  calculated_reward = 100
  print(transaction_details)
  #add the entry to transaction table
  transaction = Transaction(
    businessId = transaction_details["business_id"],
    customerId = transaction_details["customer_id"], 
    reward = calculated_reward, 
    redeem = transaction_details["redeem_amount"],
    transactionAmount = transaction_details["transaction_amount"])

  db.session.add(transaction)
  db.session.commit()

  # update the customer rewards table

  #if customer_id+business_id record doesn't exist then insert new record
  existing_customer = db.session.query(Reward).get({
    "customerId" : int(transaction_details["customer_id"]),
    "businessId" : int(transaction_details["business_id"])
  })

  if(existing_customer is None):
    print("customer+business record doesn't exist")
    customer = Reward(
      customerId = transaction_details["customer_id"],
      businessId = transaction_details["business_id"],
      current_reward = calculated_reward, 
      total_reward_earned = calculated_reward, 
      total_transactions = 1
    )
    db.session.add(customer)
    db.session.commit()

  #else update current_reward and total_earned_rewards
  else:
    print("update rewards table")
    existing_customer.current_reward = existing_customer.current_reward + calculated_reward - int(transaction_details["redeem_amount"])
    existing_customer.total_reward_earned = int(existing_customer.total_reward_earned) +  calculated_reward 
    existing_customer.total_transactions += 1
    db.session.commit()

  responseObject = {
      'status' : 'success',
      'message': 'Successfully added transaction.'
  }
  return make_response(responseObject, 200)

#fetch list of rewards from all businesses for a customer
@app.route('/api/customer_rewards', methods =['GET'])
def customer_rewards():  
  join_results = db.session.query(User, Reward).filter(Reward.businessId == User.id
  ).filter(Reward.customerId == request.args["customer_id"]).all()

  response_list = []
  for (user, reward) in join_results:
    response_list.append({
      "shop_name": user.name,
      "current_reward": reward.current_reward,
      "total_cash_earned": 100
    })
  print(response_list)
  return jsonify(response_list) 

#fetch list of customers for a given business_id
@app.route('/api/user_table', methods =['GET'])
def users():
  users = User.query.all()
  return jsonify(users_schema.dump(users)) 

#fetch list of customers for a given business_id
@app.route('/api/reward_table', methods =['GET'])
def rewards():
  rewards = Reward.query.all()
  return jsonify(rewards_schema.dump(rewards)) 

#fetch list of customers for a given business_id
@app.route('/api/transaction_table', methods =['GET'])
def transactions():
  transactions = Transaction.query.all()
  return jsonify(transactions_schema.dump(transactions)) 

#fetch top customers by un-redeemed points
@app.route('/api/top_customers', methods =['GET'])
def top_customers():
  top_customers = db.session.query(Reward).filter(Reward.businessId==request.args['business_id']).order_by(Reward.current_reward.desc()).limit(10).all()
  return jsonify(rewards_schema.dump(top_customers))

@app.route('/')
@app.route('/signup')
@app.route('/customer/login')
@app.route('/business/login')
@app.route('/customer/dashboard')
@app.route('/business/dashboard')
def serve():
  return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
  app.run(host='0.0.0.0')
