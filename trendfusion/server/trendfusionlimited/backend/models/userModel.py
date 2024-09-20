from uuid import uuid4
from backend.models.models import db

def get__uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.TEXT, primary_key=True, unique=True, default=get__uuid)
    email = db.Column(db.String(150), unique=True)
    account_type = db.Column(db.String(150), nullable=False)
    role = db.Column(db.String(150), nullable=False)
    secret_key = db.Column(db.String(150), nullable=False)

class Token(db.Model):
    __tablename__ = "tokens"
    id = db.Column(db.TEXT, primary_key= True, unique=True, default= get__uuid)
    email = db.Column(db.String(150), unique=False)
    token = db.Column(db.TEXT, nullable=False)
    expired = db.Column(db.Boolean, nullable=False)
