from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, RadioField, SubmitField, FileField, SelectField, BooleanField
from wtforms.fields.html5 import DateField
from wtforms.validators import InputRequired, Length, EqualTo, ValidationError


class CreateNewNotice(FlaskForm):
	post_title_en = StringField('post_title_en', id='post_title_en', validators=[InputRequired(message="Title required"),
								Length(min=4, message='Title should contain at least 10 characters')])
	post_title_hi = StringField('post_title_hi', id='post_title_hi', validators=[InputRequired()])
	post_content_en = TextAreaField('post_content_en', id='post_content_en', validators=[InputRequired()])
	post_content_hi = TextAreaField('post_content_hi', id='post_content_hi', validators=[InputRequired()])
	noticeFor = RadioField('noticeFor', choices=[(0, 'Staff'), (1, 'Public')], default=1, coerce=int)
	post_status = RadioField('post_status', choices=[(1, 'Active'), (0, 'Inactive')], default=1, coerce=int)
	isTender = RadioField('isTender', choices=[(1, 'Active'), (0, 'Inactive')], default=0, coerce=int)
	attachment = FileField('attachment', id='attachment')
	is_important = SelectField('is_important', choices=[(0, 'No'), (1, 'Yes')], default=0, coerce=int)
	post_date = DateField('post_date', id='post_date', format='%Y-%m-%d', validators=[InputRequired()])
	notice_type = RadioField('notice_type', choices=[(0, 'Office Order'), (1, 'Form'), (2, 'Other')], default=2, coerce=int)
	submit = SubmitField('Submit')


class AddPage(FlaskForm):
	post_title_en = StringField('post_title_en', id='post_title_en',
								validators=[InputRequired(message="Title required"),
											Length(min=4, message='Title should contain at least 10 characters')])
	post_title_hi = StringField('post_title_hi', id='post_title_hi', validators=[InputRequired()])
	post_content_en = TextAreaField('post_content_en', id='post_content_en', validators=[InputRequired()])
	post_content_hi = TextAreaField('post_content_hi', id='post_content_hi', validators=[InputRequired()])
	post_status = RadioField('post_status', choices=[(1, 'Active'), (0, 'Inactive')], default=1, coerce=int)
	attachment = FileField('attachment', id='attachment')
	external_url = StringField('external_url', id='external_url')
	url_type = SelectField('url_type', id='url_type', choices=[(0, 'Page'), (1, 'File'), (2, 'Link')])
	under_of = SelectField('under_of', choices=[(0, 'Main')], validators=[InputRequired()])
	post_date = DateField('post_date', id='post_date', format='%Y-%m-%d', validators=[InputRequired()])
	footer_1 = BooleanField('footer_1', id='footer_1')
	footer_2 = BooleanField('footer_2', id='footer_2')
	footer_3 = BooleanField('footer_3', id='footer_3')

	submit = SubmitField('Submit')


class AdminLogin(FlaskForm):
	username = StringField('username', id='username', validators=[InputRequired('Enter username')])
	userpass = PasswordField('userpass', id='userpass', validators=[InputRequired('Enter password')])
	submit = SubmitField('Submit')