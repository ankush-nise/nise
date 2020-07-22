from datetime import datetime, timedelta
from werkzeug.utils import secure_filename
from form import CreateNewNotice, AdminLogin, AddPage
from flask import url_for
from tableClass import *
from functions import *


@app.before_request
def make_session_permanent():
	session.permanent = True
	app.permanent_session_lifetime = timedelta(minutes=5)

@app.errorhandler(404)
def page_not_found(e):
	return render_template('admin/404.html')


@app.route("/Admin/Login", methods=['GET', 'POST'])
def admin_login():
	if isAdminLoggedIn():
		return redirect(url_for('admin_home'))
	else:
		form = AdminLogin()
		if request.method == 'POST':
			if captcha.validate():
				username = request.form.get('username')
				userpass = request.form.get('userpass')
				if username == params['admin_username'] or userpass == params['admin-password']:
					session['username'] = params['admin_username']
					flash("Login Successful", "success")
					return redirect(url_for('admin_home'))
				else:
					flash("Invalid login details", "danger")
					return render_template('admin/login.html', form=form)
			else:
				flash("Invalid Captcha", "danger")
				return render_template('admin/login.html', form=form)
		else:
			return render_template('admin/login.html', form=form)


@app.route("/Admin/Logout")
def admin_logout():
	session.pop('username', None)
	return redirect(url_for('admin_login'))


@app.route("/Admin/Dashboard")
def admin_home():
	if isAdminLoggedIn():
		return render_template('admin/index.html')

	flash("Please login first", "danger")
	return redirect(url_for('admin_login'))


'''***************READ All Data *************'''


@app.route("/Admin/notices", methods=['GET'])
def get_notices():
	if isAdminLoggedIn():
		notices = getallnotice('notice')
		return render_template('admin/notices.html', notices=notices)
	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


@app.route("/Admin/pages", methods=['GET'])
def get_pages():
	if isAdminLoggedIn():
		pages = getallnotice('page')
		return render_template('admin/pages.html', pages=pages)
	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


'''***************Create New *************'''


@app.route("/Admin/notice/new", methods=['GET', 'POST'])
def add_notices():
	if isAdminLoggedIn():
		form = CreateNewNotice()
		if request.method == 'POST':
			if form.validate_on_submit():
				'''Add entries to database'''
				file = request.files['attachment']
				''' and allowed_image(file.filename)'''
				filename = ''
				if file:
					if allowed_file(file.filename):
						filename = str(randint(9999, 999999)) + secure_filename(file.filename)
						file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
					else:
						flash("Please upload file in pdf format only", "danger")
						return redirect(request.url)
				post_title_en = request.form.get('post_title_en')
				post_title_hi = request.form.get('post_title_hi')
				post_content_en = request.form.get('post_content_en')
				post_content_hi = request.form.get('post_content_hi')
				attachment = filename
				post_type = 'notice'
				notice_type = request.form.get('notice_type')
				notice_for = request.form.get('noticeFor')
				post_status = request.form.get('post_status')
				is_tender = request.form.get('isTender')
				is_important = request.form.get('is_important')
				post_date = request.form.get('post_date')
				entry = NiPosts(post_title_en=post_title_en, post_title_hi=post_title_hi, post_content_en=post_content_en,
								post_content_hi=post_content_hi, attachment=attachment, post_type=post_type,
								noticeFor=notice_for, post_status=post_status, isTender=is_tender, post_date=post_date,
								entryDate=datetime.now(), notice_type=notice_type, is_important=is_important)
				print(is_important)
				db.session.add(entry)
				db.session.commit()
				flash("Notice Inserted", "success")
				return redirect(url_for('get_notices'))
			else:
				return render_template('admin/notice.html', form=form)

		return render_template('admin/notice.html', form=form, action="Add")
	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


@app.route("/Admin/page/new", methods=['GET', 'POST'])
def add_page():
	if isAdminLoggedIn():
		form = AddPage()
		if request.method == "POST":
			if form.validate_on_submit():
				print('Hello')
				post_title_en = request.form.get('post_title_en')
				print(post_title_en)
			else:
				print('error')
		return render_template('admin/page.html', form=form, action="Add")

	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


'''***************Get Single Notice *************'''


@app.route("/Admin/notice/<int:notice_id>", methods=['GET'])
def notice(notice_id):
	if isAdminLoggedIn():
		form = CreateNewNotice()
		get_notice = NiPosts.query.get_or_404(notice_id)
		form.post_title_en.data = get_notice.post_title_en
		form.post_title_hi.data = get_notice.post_title_hi
		form.post_content_en.data = get_notice.post_content_en
		form.post_content_hi.data = get_notice.post_content_hi
		form.post_date.data = get_notice.post_date
		form.noticeFor.data = get_notice.noticeFor
		form.notice_type.data = get_notice.notice_type
		form.post_status.data = get_notice.post_status
		form.isTender.data = get_notice.isTender
		form.is_important.data = get_notice.is_important
		form.submit.label.text = 'Update'
		return render_template('admin/notice.html', notice_id=get_notice.ID, form=form, action="Edit")
	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


'''***************UPDATE Notice *************'''


@app.route("/Admin/notice/<int:notice_id>/update", methods=['GET', 'POST'])
def update_notice(notice_id):
	if isAdminLoggedIn():
		form = CreateNewNotice()
		if form.validate_on_submit():
			notice = NiPosts.query.get_or_404(notice_id)
			notice.post_title_en = request.form.get('post_title_en')
			notice.post_title_hi = request.form.get('post_title_hi')
			notice.post_content_en = request.form.get('post_content_en')
			notice.post_content_hi = request.form.get('post_content_hi')
			notice.post_date = request.form.get('post_date')
			notice.noticeFor = request.form.get('noticeFor')
			notice.notice_type = request.form.get('notice_type')
			notice.isTender = request.form.get('isTender')
			notice.post_status = request.form.get('post_status')
			notice.is_important = request.form.get('is_important')
			print('Hello')
			db.session.commit()
			flash("Record for "+request.form.get('post_title_en')+" Updated", "success")
			return redirect(url_for('get_notices'))
		else:
			return render_template('admin/notice.html', form=form, notice_id=notice_id)
		return render_template(url_for('get_notices'))
	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


'''***************DELETE Notice *************'''


@app.route("/Admin/notice/<int:notice_id>/delete", methods=['GET'])
def delete_notice(notice_id):
	if isAdminLoggedIn():
		get_notice = NiPosts.query.get_or_404(notice_id)
		db.session.delete(get_notice)
		db.session.commit()
		flash("Notice deleted", "success")
		return redirect(url_for('get_notices'))
	else:
		flash("Please login first", "danger")
		return redirect(url_for('admin_login'))


'''*****************************End Notice CREATE/READ/UPDATE/DELETE***************************'''


@app.route("/")
def home():
	return render_template('index.html')


@app.route("/about")
def page():
	return render_template('about.html')


def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


app.run(debug=True)
