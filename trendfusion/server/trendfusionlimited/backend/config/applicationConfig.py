from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import whisper

class ApplicationConfig:
    secret_key = 'RfurjxYlbFjdOkuVWRqtZTJMFlGbQbyoG4JGsJ4o7hw'
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://trendfusionbd_owner:PE5HVYI4KkfJ@ep-black-boat-a54jmclt.us-east-2.aws.neon.tech/trendfusionbd?sslmode=require'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db = SQLAlchemy(app) 
    cors = CORS(app, origins="*")
    bcrypt =  Bcrypt(app)

    wishperModel = whisper.load_model("base")
    GOOGLE_API_KEY = "AIzaSyBrrSlmty4PF3iKuf7f0AzADdiZqitlYhA"
    GROQ_API_KEY = "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"
    CSEID_KEY = "8239119d1fee7415a"
    