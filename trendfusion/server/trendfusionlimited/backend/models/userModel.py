from uuid import uuid4
from backend.models.models import db

def get__uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.TEXT, primary_key=True, unique=True, default=get__uuid)
    workEmail = db.Column(db.String(150), unique=True)
    password = db.Column(db.TEXT, nullable=False)
    firstName = db.Column(db.String(30), nullable=False)
    lastName = db.Column(db.String(30), nullable=False)
    contactInfo = db.Column(db.String(13), nullable=False)
    accountType = db.Column(db.String(30), nullable=False)
    role = db.Column(db.String(150), nullable=False)

class Token(db.Model):
    __tablename__ = "tokens"
    id = db.Column(db.TEXT, primary_key= True, unique=True, default= get__uuid)
    email = db.Column(db.String(150), unique=False)
    token = db.Column(db.TEXT, nullable=False)
    expired = db.Column(db.Boolean, nullable=False)
