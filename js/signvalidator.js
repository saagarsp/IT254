// Defining a function to display error message
function printError(elemId, hintMsg) {
    if(hintMsg != ""){
        document.getElementById(elemId).innerHTML = hintMsg;
        document.getElementById(elemId).style.backgroundColor = "white";
    }
    else
        document.getElementById(elemId).innerHTML = hintMsg;
        document.getElementById(elemId).style.backgroundColor = "pink";
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var password = document.contactForm.password.value;
    
	// Defining error variables with a default value
    var nameErr = emailErr = pwdErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter a valid username");
    } else {
        var regex = /^[A-Za-z]\S{2,}$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid username, no whitepace characters allowed");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter a valid email");
    } else {
        // Regular expression for basic email validation
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate password number
    if(password == "") {
        printError("pwdErr", "Passowrd must be 8 characters long with atleast 1 digit");
    } else {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(regex.test(password) === false) {
            printError("pwdErr", "Passowrd must be 8 characters long with atleast 1 digit");
        } else{
            printError("pwdErr", "");
            pwdErr = false;
        }

    }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || pwdErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details\n" +
                          "User Name: " + name + "\n" +
                          "Email Address: " + email + "\n"
        alert(dataPreview);
    }

};