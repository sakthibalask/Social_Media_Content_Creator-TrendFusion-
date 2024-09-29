from flask import jsonify, request
from backend.config.applicationConfig import ApplicationConfig as config
from backend.service.YTContentExtractor import YTExtractor as ytextractor
from backend.service.WebContentScraper import WebScraper as webscraper
from backend.service.ScriptGenerator import ScriptGenerator as scriptgen
from backend.service.UserService import *

class ApplicationController:
    appconfig = config()
    app = appconfig.app

    @app.route('/content/extractor/yt', methods = ["POST"])
    def ContentExtractor_YT():
        ytextractorservice = ytextractor()
        topic = request.json['topic']
        context = ytextractorservice.top_trending_video(topic)
        return jsonify({"yt_context": context})
    
    @app.route('/content/extractor/web', methods = ["POST"])
    def WebScraper():
        webscraperService = webscraper()
        topic = request.json['topic']
        context = webscraperService.scrape_content(topic)
        return jsonify({"web_context": context})
    
    @app.route('/script/generator', methods=["POST"])
    def ScriptGenerator():
        scriptgeneratorService = scriptgen()
        ytcontext = request.json['ytcontext']
        webcontext = request.json['webcontext']
        generated_script = scriptgeneratorService.context_generator(ytcontext, webcontext)
        f = open(f'script.txt', 'a')
        f.write(str(generated_script))
        f.close()
        # for i in range(0, 5):
        #     generated_script = scriptgeneratorService.context_generator(ytcontext, webcontext)
        #     f = open(f'script_{(i + 1)}.txt', 'a')
        #     f.write(str(generated_script))
        #     f.close()
        return jsonify({"Message":"Script Generated Successfully", "Script": generated_script})
    
    @app.route('/user/bookDemo', methods=["POST"])
    def bookDemo():
        firstName = request.json['firstName']
        lastName = request.json['lastName']
        workEmail = request.json['workEmail']
        contactInfo = request.json['contactInfo']
        return bookDemo(firstName, lastName, workEmail, contactInfo)
    
    @app.route('/user/auth', methods=["POST"])
    def loginUser():
        workEmail = request.json['workEmail']
        password = request.json['password']
        return loginUser(workEmail, password)
    
    @app.route("/auth/forgot", methods = ["POST"])
    def checkUser():
        workEmail = request.json["workEmail"]
        return check_forgot_user(workEmail)
    
    @app.route("/user/logged", methods=["POST"])
    def getUserToken():
        user_email = request.json["workEmail"]
        return get_token(user_email)

    @app.route("/user/logout", methods = ["POST"])
    def userlogout():
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith("Bearer "):
            return {"message": "Token is missing or invalid format!"}, 401
        token = auth_header.split(" ")[1]
        response = logout(token)
        return response
    


    

    
