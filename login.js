function loginEventHandler()
{
    var userNameElement = document.getElementById("Username");
    var passWordElement = document.getElementById("Password");
    var errorMessageElement = document.getElementById("errorMessage");
    var errorFlag = false;
    errorMessageElement.innerHTML = "";
    if (userNameElement.value == "")
    {
        errorMessageElement.innerHTML += "Username cannot be empty";
        errorFlag = true;
    }
    if (passWordElement.value == "")
    {
        errorMessageElement.innerHTML += "<br>Password cannot be empty";
        errorFlag = true;
    }
    if (errorFlag == false)
    {
        var message = "Thank you " + userNameElement.value + " for logging in";
        alert(message);
        location.href="blog.html"; // Goes back to homepage
    }   
}