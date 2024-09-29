from flask import jsonify
from backend.models.userModel import User, Token, db
import jwt
import datetime
import random
import string
from backend.config.applicationConfig import ApplicationConfig as config
from backend.service.MailSender import *
from backend.roles.roles import *

def decode_token(token):
    try:
        return jwt.decode(token, config.secret_key, algorithms=['HS256']), None
    except jwt.ExpiredSignatureError:
        return None, "Token Expired"
    except jwt.InvalidTokenError:
        return None, "Token Invalid"
    except Exception as e:
        return None, str(e)

def verifyToken(token):
    t = Token.query.filter_by(token = token, expired= True).first() is None
    if t:
        return False
    return True

def token_required(auth_header, role):
    if not auth_header or not auth_header.startswith("Bearer "):
        return jsonify({"message": "Token Not found"}), 401
    extracted_token = auth_header.split(" ")[1]
    decoded_token, error_message = decode_token(extracted_token)
    if not decoded_token:
        return jsonify({"message": error_message}), 403
    if decoded_token['role'] != role:
        return jsonify({"message": "Unauthorized"}), 403
    if verifyToken(extracted_token) or decoded_token['exp'] == 0:
        return jsonify({"message":"Token expired"}), 403
    return return_users()

# Returns all users
def return_users():
    try:
        users = User.query.all()
        user_list = [{"email": user.workEmail, "role": user.role} for user in users]
        return jsonify(user_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def expire_tokens(email):
    Token.query.filter_by(email=email, expired=False).update({"expired": True})
    db.session.commit()

def store_token(token):
    decoded_token, error_message = decode_token(token)
    if not decoded_token:
        return jsonify({"message": error_message}), 403
    email = decoded_token['email']
    expire_tokens(email)
    new_user_token = Token(token=token, email=email, expired=False)
    db.session.add(new_user_token)
    db.session.commit()

def create_token(email, role):
    payload = {
        "email": email,
        "role": role,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }
    return jwt.encode(payload, config.secret_key, algorithm='HS256')

def bookDemo(firstName, lastName, workEmail, contactInfo):
    domain = workEmail.split("@")[1]
    userRole = "company"
    if(str(domain) == "gmail.com"):
        return jsonify({"message": "Invalid Domain"}), 403
    else:
        if("edu.in" in str(domain)):
            userRole = "student"
        else:
            userRole = "company"
    
    if User.query.filter_by(workEmail=workEmail).first():
        return jsonify({"message": "User Exists"}), 409
    password = str(generatePassword(len(firstName)))
    hashed_password = config.bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(firstName = firstName, lastName = lastName, workEmail = workEmail, password = hashed_password,  contactInfo = contactInfo,  role=str(hasRole(str(userRole))), accountType = "Demo User")
    mailSender(workEmail, password, firstName, lastName)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': f"Credentials has been sent to mail"}), 200

def generatePassword(characters):
    s1 = list(string.ascii_lowercase)
    s2 = list(string.ascii_uppercase)
    s3 = list(string.digits)
    s4 = list(string.punctuation)

    random.shuffle(s1)
    random.shuffle(s2)
    random.shuffle(s3)
    random.shuffle(s4)

    part1 = round(characters * (30 / 100))
    part2 = round(characters * (20 / 100))
    result = []

    for x in range(part1):
        result.append(s1[x])
        result.append(s2[x])

    for x in range(part2):
        result.append(s3[x])
        result.append(s4[x])

    random.shuffle(result)
    password = "".join(result)

    return password


def loginUser(workEmail, password):
    user = User.query.filter_by(workEmail=workEmail).first()
    if not user or not config.bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Invalid email or password"}), 401

    generated_token = create_token(user.workEmail, user.role)
    store_token(generated_token)

    return jsonify({
        "message": "Login Successful",
        "token": generated_token,
        "role": user.role
    }), 200

def check_forgot_user(workEmail):
    if not User.query.filter_by(workEmail=workEmail).first():
        return jsonify({"error": "User Not Found"}), 404
    return jsonify({"message": "Check out your mail"}), 200

# Logouts existing users
def logout(extracted_token):
    decoded_token, error_message = decode_token(extracted_token)
    if not decoded_token:
        return jsonify({"message": error_message}), 403
    
    if verifyToken(extracted_token):
        return jsonify({"message":"Session expired"}), 404

    user_token = Token.query.filter_by(email=decoded_token['email'],expired=False).first()
    if not user_token:
        return jsonify({"message": "Session expired"}), 404

    user_token.expired = True
    db.session.commit()

    return jsonify({"message": "Logout successful"}), 200

# Gets current valid tokens
def get_token(workEmail):
    user_token = Token.query.filter_by(email=workEmail, expired=False).first()
    if not user_token:
        return jsonify({"message": "Session expired"}), 403
    return jsonify({"token": user_token.token}), 200

     