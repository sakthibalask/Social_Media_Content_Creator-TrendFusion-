from flask import jsonify, request
from backend.config.applicationConfig import ApplicationConfig as config
from backend.service.YTContentExtractor import YTExtractor as ytextractor
from backend.service.WebContentScraper import WebScraper as webscraper
from backend.service.ScriptGenerator import ScriptGenerator as scriptgen

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
    
