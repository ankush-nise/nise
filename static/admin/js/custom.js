jQuery("#url_type").on('change',function(){
  jQuery('#page_file').hide()
  jQuery('#page_url').hide()
  var getValue=$(this).val();
  if(getValue == 1){
    jQuery('#page_file').show()
  }else if(getValue == 2){
    jQuery('#page_url').show()
  }
});





function AdminLogin(){

    var errAry = []; var flg = false;

	if(isEmptyData(jQuery('#username').val()) == true){ //True if data is empty

		jQuery('#validate-username').html("Please enter username");flg = true;

	}if(isEmptyData(jQuery('#userpass').val()) == true){ //True if data is empty

		jQuery('#validate-userpass').html("Please enter password");flg = true;

	}/*if(isEmptyData(jQuery('#image_code').val()) == true){ //True if data is empty

		errAry.push("Please Enter Captcha <br>");flg = true;

	}*/if(flg == true){
        return false;

	}else{

		return true;

	}

	

}

function sendmessage(){

	jQuery('.loading').css('display','block').html();

	var errAry = []; var flg = false;

	var name = jQuery('#name').val();

	var email = jQuery('#email').val();

	var subject = jQuery('#subject').val();

	var message = jQuery('#message').val();

	if(isEmptyData(jQuery('#name').val()) == true){ //True if data is empty

		errAry.push("Please Enter Name <br>");flg = true;

	}if(isEmptyData(jQuery('#email').val()) == true){ //True if data is empty

		errAry.push("Please Enter Email Id <br>");flg = true;

	}if(isEmptyData(jQuery('#subject').val()) == true){ //True if data is empty

		errAry.push("Please Enter Subject  <br>");flg = true;

	}if(isEmptyData(jQuery('#message').val()) == true){ //True if data is empty

		errAry.push("Please Enter message  <br>");flg = true;

	}

	if(flg == true){

		jQuery('.error-message').css('display','block').html(errAry);

		return false;

	}else{

		

		jQuery.ajax({

			url: URL_ROOT+"ajax.php?type=sendmessage&name="+name+"&email="+email+"&subject="+subject+"&message="+message,

			success: function (response) {

				if(response == 1){

					jQuery('.sent-message').css('display','block').html('Your message has been sent. Thank you!');

					jQuery('#name').val('');

					jQuery('#email').val('');

					jQuery('#subject').val('');

					jQuery('#message').val('');

				}else{

					jQuery('.error-message').css('display','block').html('Please try again later.');

					

				}

				

			},

		});

	}

	jQuery('.loading').css('display','none').html('');

	return false;

}

function usersignup(){

	var errAry = []; var flg = false;
	jQuery('.validate').html('');
	
	if(isEmptyData(jQuery('#FullName').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-FullName').html('This field cannot be blank');
	}
	if(isEmptyData(jQuery('#person_name').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-person_name').html('This field cannot be blank');
	}if(jQuery('#person_name').val().length < 5){ //True if data is empty
		flg = true;
		jQuery('#validate-person_name').html('Name of Person should be greater than 5 Character');
	}if(isEmptyData(jQuery('#personDesignation').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-personDesignation').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#personCountry').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-personCountry').html('Please select this field');
	}
	if(isEmptyData(jQuery('#sector').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-sector').html('Please select this field');
	}
	if(isEmptyData(jQuery('#mobileNumber').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-mobileNumber').html('This field cannot be blank');
	}
	if(isEmptyData(jQuery('#EmailId').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-EmailId').html('This field cannot be blank');

	}

	if(isEmptyData(jQuery('#npassword').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-npassword').html('This field cannot be blank');

	}if(isEmptyData(jQuery('#cpassword').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');

	}if(jQuery('#cpassword').val().length < 8){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');

	}

	if(jQuery('#npassword').val() != jQuery('#cpassword').val()){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');

	}

	if(isEmptyData(jQuery('#authorizationLetter').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-authorizationLetter').html('Please upload attachment');

	}
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function investorsignup(){

	var errAry = []; var flg = false;
	jQuery('.validate').html('');
	
	if(isEmptyData(jQuery('#company_name').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-company_name').html('This field cannot be blank');
	}
	if(isEmptyData(jQuery('#first_name').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-first_name').html('This field cannot be blank');
	}if(jQuery('#first_name').val().length < 5){ //True if data is empty
		flg = true;
		jQuery('#validate-first_name').html('Name of Person should be greater than 5 Character');
	}if(isEmptyData(jQuery('#last_name').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-last_name').html('This field cannot be blank');
	}if(jQuery('#last_name').val().length < 5){ //True if data is empty
		flg = true;
		jQuery('#validate-last_name').html('Last name should be greater than 5 Character');
	}if(isEmptyData(jQuery('#designation').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-designation').html('This field cannot be blank');
	}/*if(isEmptyData(jQuery('#country').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-country').html('This field cannot be blank');
	}*/if(isEmptyData(jQuery('#mobileNumber').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-mobileNumber').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#email').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-email').html('This field cannot be blank');

	}if(isEmptyData(jQuery('#npassword').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-npassword').html('This field cannot be blank');

	}if(isEmptyData(jQuery('#cpassword').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');

	}if(jQuery('#cpassword').val().length < 8){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');

	}if(jQuery('#npassword').val() != jQuery('#cpassword').val()){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');

	}if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function validCompanyDetail(){
	var flg = false;
	jQuery('.validate').html('');
	if(isEmptyData(jQuery('#complete_address').val()) == true || isEmptyData(jQuery('#zipcode').val()) == true || isEmptyData(jQuery('#state').val()) == true || isEmptyData(jQuery('#country').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-address').html('Please fill out all mandatory fields');
	}if(isEmptyData(jQuery('#website').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-website').html('Please enter valid URL');
	}if(isEmptyData(jQuery('#company_detail').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-company_detail').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#majority_stakeholder').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-majority_stakeholder').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#majority_stakeholder_country').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-majority_stakeholder_country').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#majority_stakeholder_country').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-majority_stakeholder_country').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#head_first_name').val()) == true || isEmptyData(jQuery('#head_last_name').val()) == true || isEmptyData(jQuery('#head_email').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-ceo_detail').html('Please fill out all mandatory fields');
	}/*if(isEmptyData(jQuery('#letter_authorization').val()) == true && isEmptyData(jQuery('#old_letter_authorization').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#valid-letter_authorization').html('This field cannot be blank');
	}*/
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function validProjectDetail(){
	var flg = false;
	jQuery('.validate').html('');
	if(isEmptyData(jQuery('#project_title').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-project_title').html('This field cannot be blank');
	}/*
	if(jQuery('.checkGrid:checkbox:checked').length == 0){ //True if data is empty
		flg = true;
		jQuery('#validate-category').html('Please select atleast one');
	}*/
	if(jQuery('.checkGridOff:checkbox:checked').length == 0 && jQuery('.checkGrid:checkbox:checked').length == 0){ //True if data is empty
		flg = true;
		jQuery('#validate-categoryOffGrid').html('Please select atleast one');
	}
	if (jQuery('input[name=project_type]:checked').length == '0'){ //True if data is empty
		flg = true;
		jQuery('#validate-project_type').html('Please select atleast one');
	}
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function validInvestmentDetails(){
	var flg = false;
	jQuery('.validate').html('');
	
	if(isEmptyData(jQuery('#investment_detail').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-investment_detail').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#investment_doc').val()) == true  && jQuery('#old_investment_doc').val()==''){ //True if data is empty
		flg = true;
		jQuery('#valid-investment_doc').html('Please select file');
	}if(isEmptyData(jQuery('#site_time_fin_year').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-site_time_fin_year').html('Please select financial year');
	}if(isEmptyData(jQuery('#site_time_fin_month').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-site_time_fin_month').html('Please select timeline');
	}if(isEmptyData(jQuery('#proposed_time_fin_year').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-proposed_time_fin_year').html('Please select financial year');
	}if(isEmptyData(jQuery('#proposed_time_fin_month').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-proposed_time_fin_month').html('Please select timeline');
	}if(isEmptyData(jQuery('#invest_amount').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-invest_amount').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#site_location').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-site_location').html('Please select Preferred site/location');
	}if(isEmptyData(jQuery('#site_location').val()) == false && isEmptyData(jQuery('#site_state').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-site_state').html('Please select state');
	}/*if(isEmptyData(jQuery('#contacted_agency').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-contacted_agency').html('This field cannot be blank');
	}*/if (jQuery('input[name=project_report]:checked').length == '0'){ //True if data is empty
		flg = true;
		jQuery('#validate-project_report').html('Please select atleast one');
	}if(jQuery("input[name='project_report']:checked").val() == 'r1' && isEmptyData(jQuery('#file').val()) == true && jQuery('#old_dpr_doc').val()==''){ //True if data is empty
		flg = true;
		
		jQuery('#validate-dpr_doc').html('Please upload DPR');
	}if(jQuery("input[name='project_report']:checked").val() == 'r2' && isEmptyData(jQuery('#date').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-dpr_date').html('Select tentative date for completion of DPR');
	}
	
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function validPlantDetails(){
	var flg = false;
	jQuery('.validate').html('');
	
	/*if(isEmptyData(jQuery('#total_area').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-total_area').html('This field cannot be blank');
	}*/if(isEmptyData(jQuery('#sezs').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-sezs').html('Please select this field');
	}if(isEmptyData(jQuery('#ports').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-ports').html('Please select this field');
	}/*if(isEmptyData(jQuery('#location_factor').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-location_factor').html('This field cannot be blank');
	}*/
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function validAssistaneDetails(){
	var flg = false;
	jQuery('.validate').html('');
	
	if(jQuery('.checkGrid:checkbox:checked').length == 0){ //True if data is empty
		flg = true;
		jQuery('#validate-assist').html('Please select atleast one');
		
	}if($("#category4").is(':checked') && isEmptyData(jQuery('#assist_other').val()) == true){
		flg = true;
		jQuery('#validate-assist').html('This field cannot be blank');
		
	}if(isEmptyData(jQuery('#assistance_detail').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-assistance_detail').html('This field cannot be blank');
		
	}if(isEmptyData(jQuery('#document').val()) == true && isEmptyData(jQuery('#old_document').val()) == true ){ //True if data is empty
		flg = true;
		jQuery('#valid-document').html('Please select file');
	}
	
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function fetchAllDetail(id){
	jQuery('#investorData').html('Please wait....');
	jQuery.ajax({
		url: URL_ROOT+"ajax.php?type=fetchInvestorDetail&id="+id,
		success: function (response) {
			setTimeout(function(){
					jQuery('#investorData').html(response);
				}, 2000);
			/*if(response == 1){
				
				
			}else{
				error_notice('Please try again later.')		
			}*/
		},
	});
}
/*function replyInvestor(){
	if(confirm("Changes not possible after final submission. Are you sure for final submission? ")){
		default_notice();
		jQuery.ajax({
			url: URL_ROOT+"ajax.php?type=replyInvestor",
			success: function (response) {
				if(response == 1){
					success_notice('Application submitted successfully');
					setTimeout(function(){
						window.location=URL_ROOT+'Investor/Investor_Dashboard';
					}, 2000);
				}else{
					error_notice('Somethinf went wrong. Please try again later')
				}
			},
		});
	}else{
		return false;
	}
}*/
function finalSubmit(){
	if(confirm("Changes not possible after final submission. Are you sure for final submission? ")){
		default_notice();
	jQuery.ajax({
		url: URL_ROOT+"ajax.php?type=finalSubmission",
		success: function (response) {
			if(response == 1){
				success_notice('Application submitted successfully');
				setTimeout(function(){
					window.location=URL_ROOT+'Investor/Investor_Dashboard';
				}, 2000);
			}else{
				error_notice('Something went wrong. Please try again later')
			}
		},
	});
	}else{
		return false;
	}
}
function isUrlValid(url) {
    url_validate = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	if(!url_validate.test(url)){
	   return true;
	}
	else{
	   return false;
	}
}
function validPassword(){
	var flg = false;
	jQuery('.validate').html('');
	if(isEmptyData(jQuery('#npassword').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-npassword').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#cpassword').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-cpassword').html('This field cannot be blank');
	}if(jQuery('#cpassword').val().length < 8 && isEmptyData(jQuery('#npassword').val()) == false && isEmptyData(jQuery('#cpassword').val()) == false){ //True if data is empty
		flg = true;
		jQuery('#validate-errMsg').html('Password should be greater than 8 Character');
	}
	if(jQuery('#npassword').val() != jQuery('#cpassword').val()){ //True if data is empty
		flg = true;
		jQuery('#validate-errMsg').html('Password not matched');
	}	
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}
}
function validAgencyProfile(){
	var flg = false;
	jQuery('.validate').html('');
	if(isEmptyData(jQuery('#FullName').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-FullName').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#sector').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-sector').html('Please select this field');
	}if(isEmptyData(jQuery('#Address').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-Address').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#person_name').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-person_name').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#mobileNumber').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-mobileNumber').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#personCountry').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-personCountry').html('Please select this field');
	}if(isEmptyData(jQuery('#statecd').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-statecd').html('Please select this field');
	}if(isEmptyData(jQuery('#city').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-city').html('This field cannot be blank');
	}if(isEmptyData(jQuery('#pincode').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-pincode').html('This field cannot be blank');
	}	
	if(flg == false){
		if(confirm("Are you sure to submit the data?")){
			return true;
		}else{
			return false;
		}
	}
	else{
		return false;
	}	
}
function removeAttachment(vl){
	if(confirm("Are you sure to remove file?")){
		default_notice();
		jQuery.ajax({
			url: URL_ROOT+"ajax.php?type=removeAttachment&file="+vl,
			success: function (response) {
				if(response == 1){
					setTimeout(function(){
						var cn = '<input type="file" class="form-control checkFile" name="letter_authorization" id="letter_authorization" style="display: inline-block;width: 80%;"  /><span class="validate text-danger" style="display:block" id="valid-letter_authorization"></span>';
						jQuery('#att_container').html(cn);
						success_notice('File has been removed.');
					}, 3000);
					
				}else{
					error_notice('Please try again later.')		
				}
			},
		});
		
	}else{
		return false;
	}
}
function removeInvestmentDoc(){
	if(confirm("Are you sure to remove file?")){
		default_notice();
		var vl = jQuery('#old_investment_doc').val();
		jQuery.ajax({
			url: URL_ROOT+"ajax.php?type=removeInvestmentDoc&file="+vl,
			success: function (response) {
				if(response == 1){
					setTimeout(function(){
						var cn = '<input type="file" class="form-control checkFile" name="investment_doc" id="investment_doc" style="display: inline-block;width: 80%;"  /><span class="validate text-danger" style="display:block" id="valid-investment_doc"></span>';
						jQuery('#att_container').html(cn);
						success_notice('File has been removed.');
					}, 3000);
					
				}else{
					error_notice('Please try again later.')		
				}
			},
		});
		
	}else{
		return false;
	}
}
function removeDPR(){
	if(confirm("Are you sure to remove file?")){
		default_notice();
		var vl = jQuery('#old_dpr_doc').val();
		jQuery.ajax({
			url: URL_ROOT+"ajax.php?type=removeDPR&file="+vl,
			success: function (response) {
				if(response == 1){
					setTimeout(function(){
						var cn = '<input type="file" class="form-control checkDPR" name="dpr_doc" id="file" ><span class="validate text-danger" style="display:block" id="valid-dpr_doc"></span>';
						jQuery('#att_container_dpr').html(cn);
						success_notice('File has been removed.');
					}, 3000);
					
				}else{
					error_notice('Please try again later.')		
				}
			},
		});
		
	}else{
		return false;
	}
}
function removeAssistDoc(){
	if(confirm("Are you sure to remove file?")){
		default_notice();
		var vl = jQuery('#old_document').val();
		jQuery.ajax({
			url: URL_ROOT+"ajax.php?type=removeAssistDoc&file="+vl,
			success: function (response) {
				if(response == 1){
					setTimeout(function(){
						var cn = '<input type="file" class="form-control checkFile" name="document" id="document" style="display: inline-block;width: 80%;"  /><span class="validate text-danger" style="display:block" id="valid-document"></span>';
						jQuery('#att_container').html(cn);
						success_notice('File has been removed.');
					}, 3000);
					
				}else{
					error_notice('Please try again later.')		
				}
			},
		});
		
	}else{
		return false;
	}
}
function replyGreivence(){

	var errAry = []; var flg = false;

	jQuery('.validate').html('')

	if(isEmptyData(jQuery('#remarks').val()) == true){ //True if data is empty

		flg = true;

		jQuery('#validate-remarks').html('This field cannot be blank');

	}

	if(isEmptyData(jQuery('#status').val()) == true){ //True if data is empty

		flg = true;

		jQuery('#validate-status').html('Please select status');

	}
	if(flg == false){

		if(confirm("Are you sure to submit the data?")){

			return true;

		}else{

			return false;

		}

	}

	else{

		return false;

	}

	

}

function validGreivence(){

	

	var errAry = []; var flg = false;
	var check ='';

	jQuery('.validate').html('')

	var selectedOption = jQuery("input:radio[name=bidding_company]:checked").val();

	if(selectedOption == 'OTHER' && isEmptyData(jQuery('#bidComp_other').val()) == true){ //True if data is empty

		flg = true;
		check =1;
		jQuery('#validate-bidding_company').html('Please enter Tendering Agency');

	}
	if(isEmptyData(jQuery('#sector').val()) == true){ //True if data is empty

		flg = true;
		check =2;
		jQuery('#validate-sector').html('Please select state');

	}
	if(isEmptyData(jQuery('#ref_bid_no').val()) == true){ //True if data is empty

		flg = true;
		check =3;

		jQuery('#validate-ref_bid_no').html('Please select tender');

	}
	if(isEmptyData(jQuery('#statecd').val()) == true){ //True if data is empty

		flg = true;
		check =2;
		jQuery('#validate-statecd').html('Please select state');

	}

	

	if(isEmptyData(jQuery('#tender_title').val()) == true){ //True if data is empty

		flg = true;
		check =4;

		jQuery('#validate-tender_title').html('Please enter Tender title/Description');

	}

	if(isEmptyData(jQuery('#plant_capacity').val()) == true){ //True if data is empty

		flg = true;
		check =5;

		jQuery('#validate-plant_capacity').html('Please enter capacity');

	}

	if(isEmptyData(jQuery('#pca_date').val()) == true){ //True if data is empty

		flg = true;
		check =6;

		jQuery('#validate-pca_date').html('Please select Date of Power Sale Agreement (PSA)');

	}

	if(isEmptyData(jQuery('#ppa_date').val()) == true){ //True if data is empty

		flg = true;
		check =7;

		jQuery('#validate-ppa_date').html('Please select Date of Power Purchase Agreement (PPA)');

	}

	if(isEmptyData(jQuery('#project_milestone').val()) == true){ //True if data is empty

		flg = true;
		check =8;

		jQuery('#validate-project_milestone').html('Please select project milestone');

	}

	if(isEmptyData(jQuery('#issue').val()) == true && isEmptyData(jQuery('#project_milestone').val()) == false){ //True if data is empty

		flg = true;
		check =9;

		jQuery('#validate-issue').html('Please select issue');

	}

	if(isEmptyData(jQuery('#gre_related_to').val()) == true){ //True if data is empty

		flg = true;
		check =10;

		jQuery('#validate-gre_related_to').html('Please select this field');

	}

	if(isEmptyData(jQuery('#desc_issue').val()) == true){ //True if data is empty

		flg = true;
		check =11;

		jQuery('#validate-desc_issue').html('Please enter Details of the Grievance');

	}

	
	//alert(check)
	if(flg == false){

		if(confirm("Are you sure to submit the data?")){

			return true;

		}else{

				return false;

		}

	}

	else{

		return false;

	}

}

function forgotPassword(){

	jQuery('#re_msg').html('Please wait....');
	var flg = false;
	jQuery('#validate-email').html('');
	if(isEmptyData(jQuery('#email').val()) == true){ //True if data is empty
		flg = true;
		jQuery('#validate-email').html('Please enter valid email address');
	}
	//alert(check)
	if(flg == false){
		var agency = jQuery("input[name='usertype']:checked").val();
		if(confirm("Are you sure to submit the data?")){
			var id = jQuery('#email').val();
			jQuery.getJSON(URL_ROOT+"ajax.php?type=forgotPassword&id="+id+"&utype="+agency,function(data){ 
				if(data.status == 'ok'){
					jQuery('#re_msg').html(data.sucMsg);
			}else{
				jQuery('#re_msg').html('');
				jQuery('#validate-email').html(data.errMsg);
			}
			jQuery('#email').val('');
		
			});
			return true;

		}else{
			return false;

		}

	}

	else{

		return false;

	}
	

}

function topFunction() {

  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

function isEmptyData(vl){

	if(jQuery.trim(vl) == ''){

		return true;	

	}

	return false;

}



function refreshCaptcha(){

	var img =  document.images['captchaimg']; 

	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;

}

function getSubGrievance(id,gtype){

	jQuery('#loader').html('Loading...');
	jQuery('#subgreivancedata').html('');
	jQuery('#statusValues').html('');

	jQuery.getJSON(URL_ROOT+"ajax.php?type=getSubGrievance&id="+id+"&gtype="+gtype,function(data){ 

		var dataVal='';

		if(data.gtype == 1){ //For Grievance

			if(data.status == 'ok'){

				dataVal='<label>Sub Grievance : <span class="text-danger">*</span></label><div class="controls" ><select name="sub_greivance" id="sub_greivance" class="form-control"><option value="">Select</option>';

				jQuery.each( data.data, function( key, val ) {

					dataVal+='<option value="'+val.id+'">'+val.sub_category+'</option>';

				});

				dataVal+='</select></div>';

				jQuery('#subgreivancedata').html(dataVal);

			}

		}else{

			 //For Milestone

			if(data.status == 'ok'){

				dataVal='<label>Issue : <span class="text-danger">*</span></label><div class="controls" ><select name="issue" id="issue" class="form-control"><option value="">Select</option>';

				jQuery.each( data.data, function( key, val ) {

					dataVal+='<option value="'+val.id+'">'+val.sub_category+'</option>';

				});

				dataVal+='</select></div>';

				jQuery('#statusValues').html(dataVal);

			}

		

		}

		jQuery('#loader').html('');

	});

}

function fetchTenderList(){

	//alert(sl_id)

	jQuery('#loader_tender').html('Loading...');

	jQuery('[name=ref_bid_no]').val( '' );

	var agency = jQuery("input[name='bidding_company']:checked").val();

	var sector = jQuery("#sector").val();

	jQuery.getJSON(URL_ROOT+"ajax.php?type=fetchTenderList&agency="+agency+"&sector="+sector,function(data){ 

		var dataVal='';

		if(data.status == 'ok'){

			dataVal='<option value="">Select Tender</option>';

			jQuery.each( data.data, function( key, val ) {

				/*var sl_value="";

				if(sl_id==val.district_cd){

					sl_value="selected";

				}

				*/

				dataVal+='<option value="'+val.id+'"  >'+val.tenerRefNo+'</option>';

			});

		}else{

			dataVal='<option value="">Select Sector First</option>';

		}

		jQuery('#loader_tender').html('');

		jQuery('#ref_bid_no').html(dataVal);

	});

}

function getTenderTitle(id){

	jQuery('#loader_tender').html('Loading...');

	jQuery.getJSON(URL_ROOT+"ajax.php?type=getTenderTitle&id="+id,function(data){ 

		if(data.status == 'ok'){

			jQuery('#tender_title').val(data.tenderTitle);

		}else{

			jQuery('#tender_title').val('Error');

		}

		jQuery('#loader_tender').html('');

	});

}

function fetchDistrict(id,sl_id){

	//alert(sl_id)

	jQuery.getJSON(URL_ROOT+"ajax.php?type=district&id="+id+"&sl_id="+sl_id,function(data){ 

		var dataVal='';

		if(data.status == 'ok'){

			dataVal='<option value="">~~~~~~~~~Select District~~~~~~~~~</option>';

			jQuery.each( data.data, function( key, val ) {

				var sl_value="";

				if(sl_id==val.district_cd){

					sl_value="selected";

				}

				dataVal+='<option value="'+val.district_cd+'"  '+sl_value+'>'+val.name+'</option>';

			});

		}else{

			dataVal='<option value="">~~~~~~~~~Select State First~~~~~~~~~</option>';

		}

		jQuery('#districtcd').html(dataVal);

	});

}

$(document).ready(function(e) {

	$('.checkFile').change(function(){
		var file = this.files[0];
		var filename=$(this).attr("name");
		var fileid=$(this).attr("id");
		size = file.size;
		type = file.type;
		$('#valid-'+filename).html('');
		if(type!="application/pdf")
		{
			$('#valid-'+filename).html('Only PDF can be upload');
			$("#"+fileid).replaceWith($("#"+fileid).val('').clone(true));
		}else if(size>1000000){
			$('#valid-'+filename).html('Max. 1 Mb file can be upload');
			$("#"+fileid).replaceWith($("#"+fileid).val('').clone(true));
		}

		//your validation

	});

});
$(document).ready(function(e) {

	$('.checkDPR').change(function(){
		var file = this.files[0];
		var filename=$(this).attr("name");
		var fileid=$(this).attr("id");
		size = file.size;
		type = file.type;
		$('#validate-'+filename).html('');
		if(type!="application/pdf")
		{
			$('#validate-'+filename).html('Only PDF can be upload');
			$("#"+fileid).replaceWith($("#"+fileid).val('').clone(true));
		}else if(size>10000000){
			$('#validate-'+filename).html('Max. 5-10Mb file can be upload');
			$("#"+fileid).replaceWith($("#"+fileid).val('').clone(true));
		}

		//your validation

	});

});
