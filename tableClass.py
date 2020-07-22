from flask import Flask, render_template, request, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from random import randint
from flask import session
import json
import os
from flask_sessionstore import Session
from flask_session_captcha import FlaskSessionCaptcha


with open('config.json', 'r') as c:
	params = json.load(c)["params"]

local_server = True
app = Flask(__name__)

if local_server:
	app.config['SQLALCHEMY_DATABASE_URI'] = params['local_uri']
else:
	app.config['SQLALCHEMY_DATABASE_URI'] = params['prod_uri']

db = SQLAlchemy(app)
app.config['UPLOAD_FOLDER'] = params['upload_folder']
ALLOWED_EXTENSIONS = {"pdf"}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
csrf = CSRFProtect(app)
app.config['SECRET_KEY'] = os.urandom(32)
app.config['CAPTCHA_ENABLE'] = True
app.config['CAPTCHA_LENGTH'] = 5
app.config['CAPTCHA_WIDTH'] = 160
app.config['CAPTCHA_HEIGHT'] = 60
app.config['SESSION_TYPE'] = 'sqlalchemy'
Session(app)
captcha = FlaskSessionCaptcha(app)


class NiPosts(db.Model):
	ID = db.Column(db.Integer, primary_key=True)
	post_title_en = db.Column(db.String(300), nullable=False)
	under_of = db.Column(db.Integer, nullable=False)
	post_title_hi = db.Column(db.String(300), nullable=False)
	post_content_en = db.Column(db.Text(42940000), nullable=False)
	post_content_hi = db.Column(db.Text(42940000), nullable=False)
	attachment = db.Column(db.String(120), nullable=False)
	post_type = db.Column(db.String(20),  nullable=False)
	noticeFor = db.Column(db.Integer, nullable=False)
	post_status = db.Column(db.Integer, nullable=False)
	isTender = db.Column(db.Integer, nullable=False)
	post_date = db.Column(db.DateTime)
	notice_type = db.Column(db.Integer, nullable=False)
	is_important = db.Column(db.Integer, nullable=False)
	external_url = db.Column(db.String(42940000), nullable=True)
	url_type = db.Column(db.Integer, nullable=True)
	entryDate = db.Column(db.DateTime, nullable=False)

	def __repr__(self):
		return f"NiPosts('{self.ID}','{self.post_title_en}','{self.post_title_hi}', '{self.post_content_en}',"\
			f"'{self.post_content_hi}', '{self.attachment}', '{self.post_type}', {self.isTender}, {self.post_status}, {self.noticeFor}," \
			f"{self.notice_type}, {self.is_important}, {self.external_url}, {self.under_of}, {self.url_type})"

