from email.message import EmailMessage
import ssl
import smtplib

def mailSender(workEmail, Accountpassword, firstName, lastName):
    sender = "trendfusionlimited.info@gmail.com"
    password = "vvmjogsaseqtkldg"
    revicever = str(workEmail)

    subject = "Your Demo Account Has Been Successfully Created"

    body = f"""
        Dear {firstName +" "+lastName},

        We are pleased to inform you that your demo account with Trendfusion Limited has been successfully created. Below are your account credentials:

        Work Email: {revicever}
        Password: `{Accountpassword}`

        We thank you for choosing Trendfusion Limited and are confident that you will have a positive experience with our products and services. Should you have any questions or require further assistance, please do not hesitate to reach out to us at trendfusionlimited.info@gmail.com.

        Welcome aboard!

        Best regards,
        The Trendfusion Limited Team
        Trendfusion Limited
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

def loginMail(workEmail, firstName, lastName):
    sender = "trendfusionlimited.info@gmail.com"
    password = "vvmjogsaseqtkldg"
    revicever = str(workEmail)

    subject = "Your Demo Account Has Been Successfully Created"

    body = f"""
        Dear {firstName +" "+lastName},

        We are pleased to inform you that your demo account with Trendfusion Limited has been successfully created. Below are your account credentials:

        Work Email: {revicever}

        We thank you for choosing Trendfusion Limited and are confident that you will have a positive experience with our products and services. Should you have any questions or require further assistance, please do not hesitate to reach out to us at trendfusionlimited.info@gmail.com.

        Welcome aboard!

        Best regards,
        The Trendfusion Limited Team
        Trendfusion Limited
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

