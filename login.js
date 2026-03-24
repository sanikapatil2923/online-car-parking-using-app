
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var phone = document.forms['form']['phone']; // Add phone input
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var phone_error = document.getElementById('phone_error'); // Add phone error element

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', pass_verify);
phone.addEventListener('textInput', phone_verify); // Add phone verification

function validated() {
    // Email validation
    if (!validateEmail(email.value)) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    // Password validation
    if (password.value.length < 6) { // Changed to 8 characters
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        pass_error.innerText = "Password must be at least 8 characters long."; // Error message
        password.focus();
        return false;
    }

    // Phone number validation
    if (!validatePhone(phone.value)) {
        phone.style.border = "1px solid red";
        phone_error.style.display = "block";
        phone_error.innerText = "Phone number must be exactly 10 digits."; // Error message
        phone.focus();
        return false;
    }

    return true; 
}

function email_verify() {
    if (validateEmail(email.value)) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_verify() {
    if (password.value.length >= 6) { // Changed to 8 characters
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

function phone_verify() {
    if (validatePhone(phone.value)) {
        phone.style.border = "1px solid silver";
        phone_error.style.display = "none";
        return true;
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(email);
}


function validatePhone(phone) {
    var re = /^\d{10}$/; 
    return re.test(phone);
}
else    if (document.formfill.Password.value == document.formfill.CPassword.value) {
        popup.classList.add("open-slide")
        return false;
    }
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove('open-slide')
}