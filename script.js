// Login Page Validations
function loginEventHandler()
{
    var username = document.getElementById("Username");
    var password = document.getElementById("Password");

    var errorUsername = document.getElementById("usernameErrorMessage");
    var errorPassword = document.getElementById("passwordErrorMessage");

    var errorFlag = false;

    errorUsername.innerHTML = "";
    errorPassword.innerHTML = "";

    if (username.value == "")
    {
        errorUsername.innerHTML += "Username cannot be empty";
        username.style.colour="red";
        errorFlag = true;
    }
    if (password.value == "")
    {
        errorPassword.innerHTML += "Password cannot be empty";
        password.style.colour="red";
        errorFlag = true;
    }
    if (errorFlag == false)
    {
        var message = "Login was successful. Welcome: " + username.value + "!";
        alert(message);
        location.href="blog.html";
    }   
}

// Post Article Page Validations
function postArticleEventHandler()
{
    var firstName = document.getElementById("txtFName");
    var lastName = document.getElementById("txtLName");
    var picture = document.getElementById("profileImage");
    var username = document.getElementById("txtUsername");
    var email = document.getElementById("email");
    var heading = document.getElementById("txtHeading");
    var images = document.getElementById("images");
    var content = document.getElementById("contentArea");

    var errorFirstName = document.getElementById("firstNameErrorMessage");
    var errorLastName = document.getElementById("lastNameErrorMessage");
    var errorPicture = document.getElementById("pictureErrorMessage");
    var errorUsername = document.getElementById("usernameErrorMessage");
    var errorEmail = document.getElementById("emailErrorMessage");
    var errorHeading = document.getElementById("headingErrorMessage");
    var errorImages = document.getElementById("imagesErrorMessage");
    var errorContent = document.getElementById("contentErrorMessage");
    
    var errorFlag = false;

    firstNameErrorMessage.innerHTML = "";
    lastNameErrorMessage.innerHTML = "";
    pictureErrorMessage.innerHTML = "";
    usernameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    headingErrorMessage.innerHTML = "";
    imagesErrorMessage.innerHTML = "";
    contentErrorMessage.innerHTML = "";

    if (firstName.value == "")
    {
        errorFirstName.innerHTML += "First name cannot be empty";
        firstName.style.colour="red";
        errorFlag = true;
    }
    if (lastName.value == "")
    {
        errorLastName.innerHTML += "Last name cannot be empty";
        lastName.style.colour="red";
        errorFlag = true;
    }
    if (picture.value == "")
    {
        errorPicture.innerHTML += "Please add profile picture";
        picture.style.colour="red";
        errorFlag = true;
    }
    if (username.value == "")
    {
        errorUsername.innerHTML += "Username cannot be empty";
        username.style.colour="red";
        errorFlag = true;
    }
    if (email.value == "")
    {
        errorEmail.innerHTML += "Email address cannot be empty";
        email.style.colour="red";
        errorFlag = true;
    }
    if (heading.value == "")
    {
        errorHeading.innerHTML += "Blog heading cannot be empty";
        heading.style.colour="red";
        errorFlag = true;
    }
    if (images.value == "")
    {
        errorImages.innerHTML += "Please add at least one image";
        images.style.colour="red";
        errorFlag = true;
    }
    if (content.value == "")
    {
        errorContent.innerHTML += "Blog article cannot be empty";
        content.style.colour="red";
        errorFlag = true;
    }
    if (errorFlag == false)
    {
        var message = "Thank you " + firstName.value + " " + lastName.value + " " + "(" + username.value + ")" + " for submitting the blog on " + heading.value;
        alert(message);
        location.href="blog.html"; // Goes back to homepage
    }   
}

