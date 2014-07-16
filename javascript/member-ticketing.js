var siteSection = "member_ticketing";

HandleMembershipStart();
function HandleMembershipStart(){
        var start = $("#ctl00_CPH1_CinemaStartControl1_lblSiteName");
        if(start.length > 0){  //We are currently on the login page.
          $("#ctl00_CPH1_CinemaStartControl1_lblSiteName").css("margin-top", "0"); //Bring the main copy up to the top of the page.
          $("#Table1").attr("width", "100%").parent().parent().parent().find("tr").first().remove();  //Let the login stuff hit the right side of the page, remove the table row above everything with shopping cart.
    
               
          var loginPrompt = $("#ctl00_CPH1_LogInControl2_lblCaption");
          if(loginPrompt.length > 0){ //We have found the login prompt

            //THE FOLLOWING LINE ADDS THIS PROMPT TO THE FRONT PAGE OF MEMBER TICKETING.
            start.html("<h2 style='margin-top:0;'>Member Login</h2>Your membership number can be found on the back of your JBFC membership card or in the confirmation email you received if you recently joined. Your password is your member number unless you have updated it. <br/><br/>Questions? Review our Ticketing FAQ.<br/><br/>Contact us at <a href='mailto:support@burnsfilmcenter.org'>support@burnsfilmcenter.org</a> (day/evening/weekend) <br/>or 914.773.7663, ext. 6 (M-F, 9:30-5:30)").css("text-align", "left");
          
          }else{ //We didn't find the login prompt, we are already logged in.
            var txt = $("#ctl00_CPH1_LogInControl2_lblMessage");
            start.html("<a class='proceed-link'><h2></h2></a>");
            var date = getParameter('date');
            var filmLink = "";
            if(!date){
              filmLink = "/JBFCMemTkts/TicketingTodaysEventsPage.aspx?key=2060-wMem12!HG5";
            }else{
              var d = date.split("-");
              filmLink = "/JBFCMemTkts/TicketingTodaysEventsPage.aspx?key=2060-wMem12!HG5&BusinessDate=" + d[2] + "%2f" + d[0] + "%2f" + d[1];
            }
            $(".proceed-link").attr("href", filmLink).find("h2").html("Continue with ticket purchase");
            $(".proceed-link").addClass("hover-helper");

            $("#ctl00_CPH1_LogInControl2_lblMessage").css("display", "none");

            $("#ctl00_CPH1_CinemaStartControl1_lblSiteName").css("margin-top", "1em");
            $("#ctl00_CPH1_LogInControl2_imgButLogOutLogin").css("padding", "1em");
            $("#ctl00_CPH1_LogInControl2_trUpdateDetails").parent().parent().attr("width", "100%");
            $("#ctl00_CPH1_LogInControl2_trUpdateDetails td").first().remove();
            $("#ctl00_CPH1_LogInControl2_trOrderHistory td").first().remove();
            $("#ctl00_CPH1_LogInControl2_trUpdateDetails, #ctl00_CPH1_LogInControl2_trOrderHistory").css("text-align", "right");
            $("#ctl00_CPH1_LogInControl2_imgButLogOutLogin").css("padding-right", "0").attr("align", "right");
          }
        }
}

function getParameter(paramName) {
  var searchString = window.location.search.substring(1),
      i, val, params = searchString.split("&");

  for (i=0;i<params.length;i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return val[1];
        }
}
return null;
}