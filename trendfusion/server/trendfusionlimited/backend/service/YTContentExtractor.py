from backend.config.applicationConfig import ApplicationConfig as config
import os
import moviepy.editor
from yt_dlp import YoutubeDL
from deep_translator import GoogleTranslator
from googleapiclient.discovery import build
from groq import Groq

model = config.wishperModel


class YTExtractor:
    def __init__(self):
        self.topic = None
    
    def download_video(self, link):
        ytl_opts = {'outtmpl': "temp"}
        print("Downloading Video...")
        with YoutubeDL(ytl_opts) as ydl:
            ydl.download([link])
        file_name = "temp.webm"
        print("Extracting audio...")
        return self.convert_audio(file_name)
    
    def convert_audio(self, input_file):
        video = moviepy.editor.VideoFileClip(input_file)
        extracted_audio = video.audio
        output_filename = "temp.mp3"
        extracted_audio.write_audiofile(output_filename)
        print("completed")
        os.remove("temp.webm")
        message = self.get_transcript(output_filename)
        context = self.summarize_contents()
        os.remove("transcript.txt")
        os.remove("temp.mp3")
        return context
    
    def get_transcript(self, output_filename):
        transcript = model.transcribe("temp.mp3", fp16=False)
        f = open("transcript.txt", 'a')
        f.write(transcript['text'])
        f.close()
        return "Content Extracted"
    
    def summarize_contents(self):
       
        with open('transcript.txt', 'r') as file:
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
        sf = open("summarised_ytcontent.txt", 'a')
        sf.write(summary_content)
        sf.close()
        os.remove('summarised_ytcontent.txt')
        return str(summary_content)

    def top_trending_video(self, topic):
        youtube = build('youtube', 'v3', developerKey=config.GOOGLE_API_KEY)
        self.topic = topic
        request = youtube.search().list(
            q=topic,
            part='snippet',
            type='video',
            order='relevance', 
            regionCode='US',
            relevanceLanguage='en', 
            maxResults=1
        )

        response = request.execute()

        video_id = response['items'][0]['id']['videoId']
        link = f"https://www.youtube.com/watch?v={video_id}"
        return self.download_video(link)

