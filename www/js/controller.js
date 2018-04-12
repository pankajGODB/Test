var prevtab,current,stepchange = false;
var numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
var onlyAlpha = /^[a-zA-Z\s]+$/;
var PhoneNoRegEx = /^[789]\d{9}$/;
var flag = false;

/*Initialize variable*/
var industry = '1_6_3';
var segment = '1_7_3';
var business_type = '1_8_3';
var business_stability = '1_12_3';
var geo_limit_norm = '1_10_3';
var property_magma = '1_11_3';
var annual_banking_credits = '1_14_3';
var existing_exposure = '1_17_3';
var eligible_4_surrogate = '1_37_13';
var eligible_4_income = '1_37_16';
var mylocation = '1_9_3';
var no_of_usl = '1_13_3';
var cc_od_property = '1_15_3';
var monthly_obligation = '1_16_3';
var fresh_loan_amt = '1_18_3';
var tenure = '1_19_3';
var irr = '1_20_3';
var inc_biz_itr_py = '1_21_3';
var inc_biz_itr_cy = '1_22_3';
var abb = '1_23_3';
var latest_audit = '1_24_3';
var annualized_vat = '1_25_3';
var pbdit_margin_input = '1_26_3';
var pat = '2_1_1';
var remuneration = '2_2_1';
var interest_on_capital = '2_3_1';
var tax = '2_4_1';
var pbt = '2_5_1';
var depreciation = '2_6_1';
var interest = '2_7_1';
var pbdit = '2_8_1';
var pbdit_margin_calc = '2_11_1';

$(document).ready(function(){
	var locmagma = [];
	for(var n = 9; n < 96; n++)
		locmagma.push(data['1_' + n + '_45']);
	
	$( "#1_9_3" ).autocomplete({
      source: locmagma
    });
	
	data['1_9_3'] = '';
	$("#1_9_3").val('');
    init();
	
	if(!$("#tab1").hasClass("filled"))
		alertfunc("All fields are mandatory");
	createXl2g();
	//console.log($("#tab3").hasClass( "green" ));
	//console.log("Height " + window.innerHeight);
	//console.log("width " + window.innerWidth);
});
function init() {
	$('#input').show();
	$("#tab1").addClass("grey");//current tab color
	if(!$("#tab1").hasClass("filled")) {
		$("#tab2").addClass("notfilled");//not filled page marked as lightred
		$("#tab3").addClass("notfilled");
		$("#tab4").addClass("notfilled");
	}
	$("#info_1").show();
	$("#info_2").hide();
	$("#info_3").hide();
	$("#info_4").hide();
	$("#output").hide();
	prevtab = current = 1;
	/*Clear PBDIT*/
	if($("#tab4").hasClass("filled") == false)
		pbditinit();
}
function gonext(step) {
	if(step != current) {
		prevtab = current;//storing prev tab status
		current = step;//stroing current tab status
		if(prevtab > current) {//if moving from forward to backward checking condition
			currenttab(step);
		}
		else {
			stepchange = validate();//checking mandatory details for the tab is filled or not
			if(stepchange == false) {
				//current = prevtab;//if state in current, storing current and prev tab status
				prevtab = current - 1;
			}
		}
	}
	stepchange = false;
	//console.log("prevtab " + prevtab);
	//console.log("current " + current);
}
function validate() {
	var check;
	for(check = 1; check < current; check++) {
		if(check == 1) {//checking 1 tab
			if($('#' + industry).val() == "" || $('#' + industry).val() == "Select Industry") {
				alertfunc("Select Industry",industry);
				currenttab(check);
				return false;
			}
			else if($('#' + segment).val() == "Select Segment") {
				alertfunc("Select Segment",segment);
				currenttab(check);
				return false;
			}
			else if($('#' + business_type).val() == "Select Business Type" || $('#' + business_type).val() == undefined) {
				alertfunc("Select Business Type",business_type);
				currenttab(check);
				return false;
			}
			else if($('#' + mylocation).val() == "" || $('#' + mylocation).val() == undefined) {
				alertfunc("Enter Location",mylocation);
				currenttab(check);
				return false;
			}
			else if($('#' + geo_limit_norm).val() == "Select Geo limit norm" || $('#' + geo_limit_norm).val() == undefined) {
				alertfunc("Select Geo limit norm",geo_limit_norm);
				currenttab(check);
				return false;
			}
			else if($('#' + property_magma).val() == "Select Property in Magma" || $('#' + property_magma).val() == undefined) {
				alertfunc("Select Property in Magma loc",property_magma);
				currenttab(check);
				return false;
			}
		}//endTab1
		else if(check == 2) {//checking 2 tab
			var repeatmblnum = 0;
			if($('#username').val() == "" || $('#username').val() == undefined){
				alertfunc("Enter your name",'username');
				currenttab(check);
				return false;
			}
			else if(!onlyAlpha.test($('#username').val())){
				alertfunc("Enter valid name",'username');
				currenttab(check);
				return false;
			}
			else if($('#usermobile').val() == "" || $('#usermobile').val() == undefined){
				alertfunc("Enter your mobile numer",'usermobile');
				currenttab(check);
				return false;
			}
			else if($('#usermobile').val().length != 10) {
				alertfunc("Enter 10-digit mobile number",'usermobile');
				currenttab(check);
				return false;
			}
			else if($('#usermobile').val().length == 10) {
				var mbl = $('#usermobile').val();
				var temp = mbl[0];
				for(var num = 1 ; num < 10; num++) {
					if(temp == mbl[num])
						repeatmblnum++;
					else
						break;
				}
			}
			if(!PhoneNoRegEx.test($('#usermobile').val()) || repeatmblnum > 5) {
				alertfunc("Enter valid mobile number",'usermobile');
				currenttab(check);
				return false;
			}
			else if($('#' + business_stability).val() == "" || $('#' + business_stability).val() == undefined) {
				alertfunc("Enter Business Stability(in yrs)",business_stability);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + business_stability).val()) || !isNumber($('#' + business_stability).val())) {
				alertfunc("Enter number only for Business Stability",business_stability);
				currenttab(check);
				return false;
			}
			else if($('#' + business_stability).val() < 1 || $('#' + business_stability).val() > 100) {
				alertfunc("Enter value from 1 to 100 for Business Stability",business_stability);
				currenttab(check);
				return false;
			}
			else if($('#' + no_of_usl).val() == "") {
				alertfunc("Enter No of USL in last 6m",no_of_usl);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + no_of_usl).val()) || !isNumber($('#' + no_of_usl).val())) {
				alertfunc("Enter number only for USL",no_of_usl);
				currenttab(check);
				return false;
			}
			else if($('#' + no_of_usl).val() < 0 || $('#' + no_of_usl).val() > 100) {
				alertfunc("Enter value from 0 to 100 for USL",no_of_usl);
				currenttab(check);
				return false;
			}
			else if($('#' + annual_banking_credits).val() == "") {
				alertfunc("Enter Annual banking credits (in lacs)",annual_banking_credits);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + annual_banking_credits).val()) || !isNumber($('#' + annual_banking_credits).val())) {
				alertfunc("Enter nmber only for Annual banking credits",annual_banking_credits);
				currenttab(check);
				return false;
			}
			else if($('#' + annual_banking_credits).val() < 25 || $('#' + annual_banking_credits).val() > 50000) {
				alertfunc("Enter value from 25 to 50000 for Annual banking credits",annual_banking_credits);
				currenttab(check);
				return false;
			}
			else if($('#' + cc_od_property).val() == "") {
				alertfunc("Enter CC / OD agnst property' (in lacs)",cc_od_property);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + cc_od_property).val()) || !isNumber($('#' + cc_od_property).val())) {
				alertfunc("Enter number only for CC / OD",cc_od_property);
				currenttab(check);
				return false;
			}
			else if($('#' + cc_od_property).val() < 0 || $('#' + cc_od_property).val() > 10000) {
				alertfunc("Enter value from 0 to 10000 for CC / OD",cc_od_property);
				currenttab(check);
				return false;
			}
			else if($('#' + monthly_obligation).val() == "") {
				alertfunc("Enter Monthly Obligation (in lacs)", monthly_obligation);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + monthly_obligation).val()) || !isNumber($('#' + monthly_obligation).val())) {
				alertfunc("Enter number only for Monthly Obligation", monthly_obligation);
				currenttab(check);
				return false;
			}
			else if($('#' + monthly_obligation).val() < 0 || $('#' + monthly_obligation).val() > 1000) {
				alertfunc("Enter value from 0 to 1000 for Monthly Obligation", monthly_obligation);
				currenttab(check);
				return false;
			}
		}//endTab2
		else if(check == 3) {//checking 3 tab
			if($('#' + existing_exposure).val() == "") {
				alertfunc("Enter Existing exposure (in lacs)",existing_exposure);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + existing_exposure).val()) || !isNumber($('#' + existing_exposure).val())) {
				alertfunc("Enter number only for Existing exposure",existing_exposure);
				currenttab(check);
				return false;
			}
			else if($('#' + existing_exposure).val() < 0 || $('#' + existing_exposure).val() > 500) {
				alertfunc("Enter value from 0 to 500 for Existing exposure",existing_exposure);
				currenttab(check);
				return false;
			}
			else if($('#' + fresh_loan_amt).val() == "") {
				alertfunc("Enter Fresh Loan Amt (Rs lacs)",fresh_loan_amt);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + fresh_loan_amt).val()) || !isNumber($('#' + fresh_loan_amt).val())) {
				alertfunc("Enter number only for Fresh Loan",fresh_loan_amt);
				currenttab(check);
				return false;
			}
			else if($('#' + fresh_loan_amt).val() < 3 || $('#' + fresh_loan_amt).val() > 150) {
				alertfunc("Enter value from 3 to 150 for Fresh Loan",fresh_loan_amt);
				currenttab(check);
				return false;
			}
			else if($('#' + tenure).val() == "Select Tenure") {
				alertfunc("Select Tenure (months)",tenure);
				currenttab(check);
				return false;
			}
			else if($('#' + irr).val() == "") {
				alertfunc("Enter IRR",irr);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + irr).val()) || !isNumber($('#' + irr).val())) {
				alertfunc("Enter number only for IRR",irr);
				currenttab(check);
				return false;
			}
			else if($('#' + irr).val() < 12 || $('#' + irr).val() > 30) {
				alertfunc("Enter value from 12 to 30 for IRR",irr);
				currenttab(check);
				return false;
			}
		}//endTab3
		else if(check == 4) {//checking 5 tab
			if($('#' + inc_biz_itr_py).val() == "") {
				alertfunc("Enter Inc from Biz as per ITR (PY) -in lacs",inc_biz_itr_py);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + inc_biz_itr_py).val()) || !isNumber($('#' + inc_biz_itr_py).val())) {
				alertfunc("Enter number only for Biz(PY)",inc_biz_itr_py);
				currenttab(check);
				return false;
			}
			else if($('#' + inc_biz_itr_py).val() < 0 || $('#' + inc_biz_itr_py).val() > 10000) {
				alertfunc("Enter value from 0 to 10000 for Biz(PY)",inc_biz_itr_py);
				currenttab(check);
				return false;
			}
			else if($('#' + inc_biz_itr_cy).val() == "") {
				alertfunc("Enter Inc from Biz as per ITR (CY)-in lacs",inc_biz_itr_cy);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + inc_biz_itr_cy).val()) || !isNumber($('#' + inc_biz_itr_cy).val())) {
				alertfunc("Enter number only for Biz(CY)",inc_biz_itr_cy);
				currenttab(check);
				return false;
			}
			else if($('#' + inc_biz_itr_cy).val() < 0 || $('#' + inc_biz_itr_cy).val() > 10000) {
				alertfunc("Enter value from 0 to 10000 for Biz(CY)",inc_biz_itr_cy);
				currenttab(check);
				return false;
			}
			else if($('#' + abb).val() == "") {
				alertfunc("Enter ABB (latest 3 months) in lacs",abb);
				currenttab(check);
				return false;
			}
			else if(!numericReg.test($('#' + abb).val()) || !isNumber($('#' + abb).val())) {
				alertfunc("Enter number only for ABB",abb);
				currenttab(check);
				return false;
			}
			else if($('#' + abb).val() < 0.25 || $('#' + abb).val() > 1000) {
				alertfunc("Enter value from 0.25 to 1000 for ABB",abb);
				currenttab(check);
				return false;
			}
			else {
				if($("#show6").is(':visible')) {//if all siz details shown then checking validation
					if($('#' + latest_audit).val() == "") {
						alertfunc("Enter Latest Audited T/o (in lacs)",latest_audit);
						currenttab(check);
						return false;
					}
					else if(!numericReg.test($('#' + latest_audit).val()) || !isNumber($('#' + latest_audit).val())) {
						alertfunc("Enter number only for Latest Audited",latest_audit);
						currenttab(check);
						return false;
					}
					else if($('#' + latest_audit).val() < 25 || $('#' + latest_audit).val() > 50000) {
						alertfunc("Enter value from 25 to 50000 for Latest Audited",latest_audit);
						currenttab(check);
						return false;
					}
					else if($('#' + annualized_vat).val() == "") {
						alertfunc("Enter Annualized VAT based t/o (in lacs)",annualized_vat);
						currenttab(check);
						return false;
					}
					else if(!numericReg.test($('#' + annualized_vat).val()) || !isNumber($('#' + annualized_vat).val())) {
						alertfunc("Enter number only for Annualized VAT",annualized_vat);
						currenttab(check);
						return false;
					}
					else if($('#' + annualized_vat).val() < 25 || $('#' + annualized_vat).val() > 50000) {
						alertfunc("Enter value from 25 to 50000 for Annualized VAT",annualized_vat);
						currenttab(check);
						return false;
					}
					else if($('#' + pbdit_margin_input).val() < 0) {
						alertfunc("Enter PBDIT margin % (Operating margins)");
						currenttab(check);
						return false;
					}
				}
			}
		}//endTab4
	}
	currenttab(current);
	if(current == 5)
		showoutputfun();
	return true;
}
function currenttab(num) {
	current = num;
	/* console.log("prevtab " + prevtab);
	console.log("current " + current); */
	if(num == 4 && prevtab !=4) popup();//show popup for financial details
		
	$("#tab" + num).addClass("grey");//current tab color
	$("#tab" + num).removeClass("notfilled");
	for(var n = 1; n < 5; n++)
		$("#info_" + n).hide();
	
	$("#info_" + num).show();
	
	$(window).scrollTop(0);//moving to top
	filledtab(prevtab);
}
function filledtab(num) {
	if(current > prevtab) {
		$("#tab" + num).removeClass("grey");
		$("#tab" + num).removeClass("notfilled");
		$("#tab" + num).addClass("filled");//adding this to recognize filled tab
	}
	else if(prevtab > current && $("#tab" + num).hasClass("filled") == false) {
		$("#tab" + num).removeClass("grey");
		$("#tab" + num).addClass("notfilled");
	}
	else if(prevtab > current && $("#tab" + num).hasClass("filled") == true){
		$("#tab" + num).removeClass("grey");
	}
}

function showfinance() {
	$("#show3").show();
	$("#show6").show();
	//show_4_tab = "show6";
	$("#myModal").hide();
	$("#shownext").show();
	flag = true;
}
function showthree() {
	/*Clear PBDIT*/
	pbditinit();
	$("#show3").show();
	$("#shownext").show();
	$("#show6").hide();
	$("#myModal").hide();
	flag = false;
}

function popup() {
	// Get the modal
	$('#myModal').css("z-index", "11");
	$("#myModal").show();
	$("#show3").hide();
	$("#show6").hide();
	$("#shownext").hide();
	$(".left, .right").click(function() {
		$("#myModal").hide();
	});
}

function popupmodal(id) {
	$("#" + id).show();
	$(".close").click(function() {
		$("#" + id).hide();
	});
}

function alertfunc(val,id) {
	$('#alertModal').css("z-index", "10");
	$('#alert').text(val);
	$("#alertModal").show();
	if(current == 4 && $("#myModal").is(':visible'))
		$('#alertModal').css("display", "none");
	$(".close").click(function() {
		if($("#alert1").is(':visible'))
			$('#alert1').hide();
		$("#alertModal").hide();
		if(id != "" || id == undefined)
			$("#" + id).focus();
	});
}

function showoutputfun() {
	$("#input").hide();
	var n;
	for( n = 31 ; n < 37; n++) {
		$('#1_' + n + '_14').removeClass("redtext");
		$('#1_' + n + '_19').removeClass("redtext");
	}
	for( n = 31 ; n < 37; n++) {
		if(data['1_' + n + '_14'] == 'Not Met')
			$('#1_' + n + '_14').addClass("redtext");
		if(data['1_' + n + '_19'] == 'Not Met')
			$('#1_' + n + '_19').addClass("redtext");
		if(data['1_' + n + '_19'] == " - ") {
			$('#1_' + n + '_19').text('NA');
			data['1_' + n + '_19'] = 'NA';
		}
	}
	if($('#' + irr).val() != "") {
		var temp = $('#' + irr).val()/100;
		$('#' + irr).val(temp);
		data[irr] = temp;
	}
	xl2g.evalAllTargets();
	
	//No-Go Creteria met or not?
	if(data[eligible_4_surrogate] == "Not eligible for Surrogate Program") {
		$('#surrogateprogram').text('Not Eligible');
	}
	else if(data[eligible_4_surrogate] == "Eligible for Surrogate Program") {
		$('#surrogateprogram').text('Eligible');
	}
	
	if(data[eligible_4_income] == "Not eligible for Income Program") {
		$('#incomeprogram').text('Not Eligible');
	}
	else if(data[eligible_4_income] == "Eligible for Income Program") {
		$('#incomeprogram').text('Eligible');
	}
	setTimeout(function() {
		window.addEventListener("error", handleError, true);
		$("#output").show();
	},800);
	$(window).scrollTop(0);
}
function openmodel() {
	$("#pbditModal").show();
	$(".closepbdit").click(function() {
		//pbditinit();
		$("#pbditModal").hide();
	});
}
//initialize pbdit details to default value
function pbditinit() {
	$('#' + latest_audit).val('');
	$('#' + annualized_vat).val('');
	$("#" + pat).val("");
	$("#" + remuneration).val("");
	$("#" + interest_on_capital).val("");
	$("#" + tax).val("");
	$("#" + pbt).text('');
	$("#" + pbdit).text('');
	$("#" + pbdit_margin_calc).text('');
	$("#" + depreciation).val("");
	$("#" + interest).val("");
	$("#" + pbdit_margin_input).text('');
	data[latest_audit] = "";
	data[annualized_vat] = "";
	data[pat] = '';
	data[remuneration] = '';
	data[interest_on_capital] = '';
	data[tax] = '';
	data[pbt] = 0.00;
	data[depreciation] = '';
	data[interest] = '';
	data[pbdit] = 0.00;
	data[pbdit_margin_calc] = 0.00;
	data[pbdit_margin_input] = 0.00;
	if(current != 1 && current != 5)
		xl2g.evalAllTargets();
}
function calculatepbdit() {
	if($("#" + pat).val() == "" || $("#" + pat).val() == undefined) {
		alertfunc("Enter PAT value in lacs",pat);
		return false;
	}
	else if(!numericReg.test($("#" + pat).val()) || !isNumber($('#' + pat).val())) {
		alertfunc("Enter number only for PAT",pat);
		return false;
	}
	else if($("#" + pat).val() < 0 || $("#" + pat).val() > 10000) {
		alertfunc("Enter PAT value from 0 to 10000",pat);
		return false;
	}
	else if($("#" + remuneration).val() == "" || $("#" + remuneration).val() == undefined) {
		alertfunc("Enter Remuneration value in lacs",remuneration);
		return false;
	}else if(!numericReg.test($("#" + remuneration).val()) || !isNumber($('#' + remuneration).val())) {
		alertfunc("Enter number only for Remuneration",remuneration);
		return false;
	}
	else if($("#" + remuneration).val() < 0 || $("#" + remuneration).val() > 10000) {
		alertfunc("Enter Remuneration value from 0 to 10000",remuneration);
		return false;
	}
	else if($("#" + interest_on_capital).val() == "" || $("#" + interest_on_capital).val() == undefined) {
		alertfunc("Enter Interest on capital value in lacs",interest_on_capital);
		return false;
	}else if(!numericReg.test($("#" + interest_on_capital).val()) || !isNumber($('#' + interest_on_capital).val())) {
		alertfunc("Enter number only for Interest on capital",interest_on_capital);
		return false;
	}
	else if($("#" + interest_on_capital).val() < 0 || $("#" + interest_on_capital).val() > 10000) {
		alertfunc("Enter Interest on capital value from 0 to 10000",interest_on_capital);
		return false;
	}
	else if($("#" + tax).val() == "" || $("#" + tax).val() == undefined) {
		alertfunc("Enter Tax in lacs",tax);
		return false;
	}else if(!numericReg.test($("#" + tax).val()) || !isNumber($('#' + tax).val())) {
		alertfunc("Enter number only for Tax",tax);
		return false;
	}
	else if($("#" + tax).val() < 0 || $("#" + tax).val() > 10000) {
		alertfunc("Enter Tax value from 0 to 10000",tax);
		return false;
	}
	else if($("#" + depreciation).val() == "" || $("#" + depreciation).val() == undefined) {
		alertfunc("Enter Depreciation value in lacs",depreciation);
		return false;
	}else if(!numericReg.test($("#" + depreciation).val()) || !isNumber($('#' + depreciation).val())) {
		alertfunc("Enter number only for Depreciation",depreciation);
		return false;
	}
	else if($("#" + depreciation).val() < 0 || $("#" + depreciation).val() > 10000) {
		alertfunc("Enter Depreciation value from 0 to 10000",depreciation);
		return false;
	}
	else if($("#" + interest).val() == "" || $("#" + interest).val() == undefined) {
		alertfunc("Enter Interest in lacs",interest);
		return false;
	}else if(!numericReg.test($("#" + interest).val()) || !isNumber($('#' + interest).val())) {
		alertfunc("Enter number only for Interest",interest);
		return false;
	}
	else if($("#" + interest).val() < 0 || $("#" + interest).val() > 10000) {
		alertfunc("Enter Interest value from 0 to 10000",interest);
		return false;
	}
	else {
		$("#pbditModal").hide();
		return true;
	}
}
//onclicking back button showing input page
function showinput() {
	init();
	$("#tab1").addClass("filled");
	$("#tab2").addClass("filled");
    $("#tab3").addClass("filled");
    $("#tab4").addClass("filled");
	if($('#' + irr).val() != "") {
		var temp = $('#' + irr).val()*100;
		$('#' + irr).val(temp);
		data[irr] = temp;
	}
	xl2g.evalAllTargets();//updating the value
}

function keypress(e,id) {
	if(e.which == 13) {
		if(id == mylocation)
			$("#1_10_3").focus();
		else if(id == 'username')
			$("#usermobile").focus();
		else if(monthly_obligation == id)
			gonext(current+1);
		else if(irr == id)
			gonext(current+1);
		else if(id == abb && flag)
			$("#" + latest_audit).focus();
		else if(id == annualized_vat && flag)
			gonext(current+1);
		else if(id == abb && !flag)
			gonext(current+1);
		else if(id == interest)
			calculatepbdit();
	}
};
function nashow() {
	alertfunc("Not applicable under income program");
}

function handleError(evt) {
    if (evt.message) { // Chrome sometimes provides this
      alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
    } else {
      alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
    }
}