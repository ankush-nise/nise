from tableClass import *


def getallnotice(posttype):
	notice = NiPosts.query.filter_by(post_type=posttype).all()
	data = []
	for val in notice:
		notice_for = 'Public'
		post_status = 'Active'
		is_tender = 'Yes'
		tender_class = 'success'
		is_important = 'Yes'
		status_class = 'success'
		if val.isTender == 0:
			is_tender = 'No'
			tender_class = 'danger'
		if val.post_status == 0:
			post_status = 'Inactive'
			status_class = 'danger'
		if val.noticeFor == 0:
			notice_for = 'Staff'
		if val.notice_type == 0:
			notice_type = 'Office Order'
		elif val.notice_type == 1:
			notice_type = 'Form'
		else:
			notice_type = 'Other'
		if val.is_important == 0:
			is_important = 'No'
		data_dict = {'ID': val.ID, 'title_en': val.post_title_en, 'title_hi': val.post_title_hi, 'noticeFor': notice_for,
					'post_status': post_status, 'isTender': is_tender, 'post_date': val.post_date, 'tender_class': tender_class,
					'status_class': status_class, 'attachment': val.attachment, 'notice_type': notice_type, 'is_important': is_important}
		data.append(data_dict)
	return data


def isAdminLoggedIn():
	if 'username' not in session:
		return False
	else:
		return True
