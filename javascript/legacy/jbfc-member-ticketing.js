var siteSection = "member_ticketing";

HandleMembershipStart();
function HandleMembershipStart(){
        var start = $("#ctl00_CPH1_CinemaStartControl1_lblSiteName");
        if(start.length > 0){  //We are currently on the login page.
               
               
          var loginPrompt = $("#ctl00_CPH1_LogInControl2_lblCaption");
          if(loginPrompt.length > 0){ //We have found the login prompt
          //THE FOLLOWING LINE ADDS THIS PROMPT TO THE FRONT PAGE OF MEMBER TICKETING.
            start.html("<h2>Member Login</h2>Please log in to your JBFC member account using the box to the right. Your membership number is required to log in, and can be found on the back of your JBFC Membership Card or in your Membership Confirmation email if you have recently joined or renewed. With our transition to a new ticketing system in the summer of 2013, all passwords were set to the member number (although you may have since updated your password). Questions? Review our FAQ about our new ticketing system, contact us at <a title='support@burnsfilmcenter.org' href='mailto:support@burnsfilmcenter.org'>support@burnsfilmcenter.org</a> or call us at 914.773.7663, ext. 6, M-F, 9:30-5:30.").css("text-align", "left");
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