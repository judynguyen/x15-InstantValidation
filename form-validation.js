function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  var passLength = passEntered.length;

  console.log("Username length is " +  userLength);
  console.log("Password is " + passEntered);
  console.log("Password length is " + passLength);

  if(userLength>=6)
  {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //turns elements green
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }


  if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passLength<6) {
  document.getElementById("passwordError").innerHTML="Password must be greater than 6 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passLength>20){
  document.getElementById("passwordError").innerHTML="Password must be less than 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else
  {
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //turns elements green
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }

  if(passEntered==userEntered)
  {
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  for(var i=0; i<=userLength; i++)
  {
      var ch;
      ch = userEntered.charAt(i);
      name = name + ch;
      console.log(name);
      if(ch == " ")
      {
        document.getElementById("usernameError").innerHTML="Bad username.";
        document.getElementById("usernameError").classList.remove("hidden-message");
        document.getElementById("usernameError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("usernameGroup").classList.add("has-error");
      }
  }

}
