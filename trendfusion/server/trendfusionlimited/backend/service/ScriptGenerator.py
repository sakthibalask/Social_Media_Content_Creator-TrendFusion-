from backend.config.applicationConfig import ApplicationConfig as config
from backend.datas.Templates import Template as template
import os
from groq import Groq



class ScriptGenerator:
    def __init__(self):
        return
    
    def context_generator(self, ytcontext, webcontext):
        templateContent = template().getyt_Tmplate()
        return self.generate_script(ytcontext, webcontext, templateContent)
    

    def generate_script(self, summary1, summary2, template):
        prompt = f"""
                Based on the following two summaries, generate a coherent and engaging script for a social media post based on the predefined template provided.
                Template : 
                {template}

                Summary 1:
                {summary1}

                Summary 2:
                {summary2}

                Generate a script for 10-15 mintues youtube video based on the given template.
            """
        Client = Groq(
            api_key = config.GROQ_API_KEY
        )
        script_completion = Client.chat.completions.create(
            messages=[
                 {
                        "role": "user",
                        "content": prompt,
                }
            ],
            model = "llama-3.1-70b-versatile",
            temperature=0.7,
        )
        script = script_completion.choices[0].message.content
        return str(script)
    
    def get_creditsUsed(self, script_len):
        return