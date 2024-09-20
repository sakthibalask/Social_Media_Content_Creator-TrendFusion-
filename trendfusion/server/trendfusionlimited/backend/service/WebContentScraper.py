from backend.config.applicationConfig import ApplicationConfig as config
import requests
from bs4 import BeautifulSoup
from groq import Groq
import os

class WebScraper:
    def __init__(self):
        return
    
    def scrape_content(self, topic):
        content = ""
        search_urls = self.web_search(topic)
        print("Scraping Context...")
        for search_url in search_urls:
            reponse = requests.get(search_url)
            soup = BeautifulSoup(reponse.content, 'html.parser')
            paragraphs = soup.find_all('p')
            content += ''.join([p.get_text() for p in paragraphs])
        f = open("webtranscript.txt", "a")
        f.write(content)
        context = self.summarize_contents()
        f.close()
        return context

    def summarize_contents(self):
        context = ""
        with open('webtranscript.txt', 'r') as file:
            context = file.read()
        
        Client = Groq(
            api_key = config.GROQ_API_KEY
        )

        chat_completion = Client.chat.completions.create(
            messages=[
                 {
                        "role": "system",
                        "content": "You are a content summarizer who summarizes provied contents by user",
                },
                {
                        "role":"user",
                        "content":f" Summarize this {context} and provide the ouptut within 600-700 words"
                }
            ],
            model = "llama-3.1-8b-instant"
        )
        summary_content = chat_completion.choices[0].message.content
        sf = open("summarised_content.txt", 'a')
        sf.write(summary_content)
        os.remove("webtranscript.txt")
        sf.close()
        os.remove("summarised_content.txt")
        return str(summary_content)
       

    
    def web_search(self, topic):
        print("Fetching Urls...")
        base_url = f"https://www.googleapis.com/customsearch/v1?q={topic}&key={config.GOOGLE_API_KEY}&cx={config.CSEID_KEY}&num={10}"
        response = requests.get(base_url)
        if response.status_code == 200:
            results = response.json()
            urls = []
            for item in results.get('items', []):
                link = item.get('link')
                if link:  
                    urls.append(link)
            print("Fetched Urls.")
            return urls
            
        else:
            print(f"Error: {response.status_code}")