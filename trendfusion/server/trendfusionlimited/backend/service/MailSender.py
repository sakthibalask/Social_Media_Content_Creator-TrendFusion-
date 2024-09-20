from email.message import EmailMessage
import ssl
import smtplib

sender = "trendfusionlimited.info@gmail.com"
password = "vvmjogsaseqtkldg"
revicever = "727821tucs234@skct.edu.in"

subject = "Your account was created successfully"

body = """
    Thanks for choosing Trendfusion Limited, Hope you will have better experience with our products and services.
    For further queries contact trendfusionlimited.info@gmail.com
"""

em = EmailMessage()

em['From'] = sender
em['To'] = revicever
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(sender, password)
    smtp.sendmail(sender, revicever, em.as_string())

