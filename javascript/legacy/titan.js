	var SITE_ROOT = "http://www.burnsfilmcenter.org/";

	OnLoad();

	function RemoveNOBR(){
		$('nobr').replaceWith(function(){
			return $("<span />").append($(this).contents());
		});
	}

	function LoadFixedCSS(){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", "https://gist.github.com/jbfcreflexions/5083479/raw/fixedCSS.css");
		var arr = document.getElementsByTagName("head");
		if(arr.length > 0){
			arr[0].appendChild(fileref);
		}
	}

	function FixDoneButtons(){
		var btn = $("#ctl00_CPH1_addMoreLink");
		btn.attr("target", "_top");
		btn.attr("href", SITE_ROOT + "films/buy-tickets");
		
		var done = $('input[src="Assets/Images/JBFCNonMem/DoneButton.jpg"]');
		if(done.length>0){
			trace("Done.length > 0");
			done.bind("click", function(e){
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
			}).bind("submit", function(e){
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
			}).bind("mouseup", function(e){
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				window.top.location.href = SITE_ROOT;
			});
		}else{
			done = $('input[src="Assets/Images/JBFCMem/DoneButton.jpg"]');
			if(done.length>0){
				done.bind("click", function(e){
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				}).bind("submit", function(e){
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				}).bind("mouseup", function(e){
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					window.top.location.href = SITE_ROOT;
				});
			}else{
			}
		}
	}

	function trace(str){
		if(window){
			if(!window.console){
				return;
			}
			else{
				console.log(str);
			}
		}else{
			return;
		}
	}

	function OnLoad(){
		RemoveNOBR();
		LoadFixedCSS();
		FixDoneButtons();
		AddTooltips();
		FixIE();
		ExtraFixes();
		HideExtraPaymentLine();
	}

	function HideExtraPaymentLine(){
		$("#ctl00_CPH1_OrderFormControl1_MagneticCardEntryControl1_rptPayments_ctl02_tdCardType").parent("tr").remove();
	}

	function ExtraFixes(){
		//CC validation
		/*var badCCstar = $("#ctl00_CPH1_OrderFormControl1_MagneticCardEntryControl1_rptPayments_ctl01_lblValidation");
		if(badCCstar.length > 0){
			badCCstar.parent().parent().css({"background-color":"#A80000", "color":"#fff"});
		}*/

		//Remove extra ticket selection options from dropdowns
		/*window.console && console.log("Removing extra select options ");
		var $list = $("select[id*=_ddQunatity]");
		$("select[id*=_ddQunatity]:gt(8)").hide();
		$list.each(
			function(i){ 
				$(this).find("option:gt(8)").hide(); 
			}
		);
		
		window.console && console.log("Removed extra select options from " + $list);*/

		$("select[id*=_ddQunatity]").find("option:gt(8)").remove();
	}

	function AddTooltips(){
		$('span[id*="_lblCVV"]').attr('title', 'The 3 or 4 digit security code on the back of your card');
		$('#ctl00_CPH1_OrderFormControl1_PasswordVerify').parent().parent().attr("title", "Your password must be at least 6 characters and only use alphanumerics, A-Z and 0-9. No special characters, please.");
	}

	function FixIE(){
		if( $("#ctl00_CPH1_OrderFormControl1_lblPaymentInformationCaption").length > 0)
		{
			$("#ctl00_CPH1_OrderFormControl1_PersonalInformationTable tbody tr:nth-child(6)").css("display", "none");
			$("#ctl00_CPH1_OrderFormControl1_PersonalInformationTable tbody tr:nth-child(7)").css("display", "none");
			$("#ctl00_CPH1_OrderFormControl1_EmailVerify").css("width", '');
		}
		$("div:contains(Phone Number), div:contains(Check here to be)").parent("td").parent("tr").hide();
	}