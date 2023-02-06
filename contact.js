function form(){
  var fname=document.getElementById("fname").value;
  var lname=document.getElementById("lname").value;
  var email=document.getElementById("email").value;
  var phone=document.getElementById("phone").value;
  var gender=document.getElementById("gender").value;
  var message=document.getElementById("message").value;

  document.writeln("Your Information: <br>" +"First name:" fname "<br>");
  document.writeln( "Last name:"+ lname "<br>");
  document.writeln("Email:" + email "<br>");
  document.writeln("Phone:" + phone "<br>");
  document.writeln("Gender:"+ gender "<br>");
  document.writeln("Message:"+ message "<br>");

  
  }
  