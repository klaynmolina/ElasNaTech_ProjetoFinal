from flask import Flask, request, render_template
import smtplib
import configparser

caminho_arquivo_config = r'D:\config\config.ini'
config = configparser.ConfigParser()
config.read('config.cfg')

app = Flask(__name__)

@app.route('/enviar_email', methods=['POST'])
def enviar_email():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        mensagem = request.form['mensagem']

        smtp_server = config.get('SMTP', 'SERVER')
        smtp_port = config.getint('SMTP', 'PORT')
        smtp_user = config.get('SMTP', 'USER')
        smtp_password = config.get('SMTP', 'PASSWORD')

        corpo_email = f'Nome: {nome}\nEmail: {email}\nMensagem:\n{mensagem}'

        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(smtp_user, smtp_password)

            server.sendmail(smtp_user, email, corpo_email)
            server.quit()

            return 'Mensagem enviada com sucesso!'
        except Exception as e:
            return f'Erro ao enviar o e-mail: {str(e)}'

if __name__ == '__main__':
    app.run()
