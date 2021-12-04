from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_marshmallow import Marshmallow
db = SQLAlchemy()
ma = Marshmallow()

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), nullable = False)
    type = db.Column(db.String(50), nullable = False) 
    phone = db.Column(db.String(20), nullable = False) 

    def __init__(self, name, email, type, phone):
        self.name = name
        self.email = email
        self.type = type
        self.phone = phone

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class Transaction(db.Model):
    transactionId = db.Column(db.Integer, primary_key = True, nullable = False)
    businessId = db.Column(db.Integer, nullable = False)
    customerId = db.Column(db.Integer, nullable = False)
    reward = db.Column(db.Integer, nullable = False)
    redeem = db.Column(db.Integer, nullable = False)
    transactionAmount = db.Column(db.Float, nullable = False)
    transactionDate = db.Column(db.DateTime(timezone=True), nullable = False,  default=func.now())


    def __init__(self, businessId, customerId, reward, redeem, transactionAmount):
        self.businessId = businessId  
        self.customerId = customerId  
        self.reward = reward  
        self.redeem = redeem  
        self.transactionAmount = transactionAmount 

class TransactionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Transaction

transaction_schema = TransactionSchema()
transactions_schema = TransactionSchema(many=True)

class Reward(db.Model):
    customerId = db.Column(db.Integer, nullable = False, primary_key = True)
    businessId =  db.Column(db.Integer, nullable = False, primary_key = True)
    current_reward = db.Column(db.Integer, nullable = False)
    total_reward_earned = db.Column(db.Integer, nullable = False)
    last_purchased_date = db.Column(db.DateTime(timezone=True), default=func.now(), onupdate=func.now(), nullable = False)
    total_transactions = db.Column(db.Integer, nullable = False)

    def __init__(self, customerId, businessId, current_reward, total_reward_earned, total_transactions):
        self.customerId = customerId 
        self.businessId = businessId 
        self.current_reward = current_reward 
        self.total_reward_earned = total_reward_earned   
        self.total_transactions = total_transactions  


class RewardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Reward

reward_schema = RewardSchema()
rewards_schema = RewardSchema(many=True)