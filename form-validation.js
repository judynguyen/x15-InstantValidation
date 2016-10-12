function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  var nope = "password"

  console.log("Username length is " +  userLength);
  console.log("Password is " + passEntered);

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

  if(passEntered == nope)
  {
    document.getElementById("passwordError").innerHTML="Bad password.";
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
}
