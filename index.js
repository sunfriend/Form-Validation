const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit");
const passwordVerification = document.querySelector("#password-verification");
submitButton.addEventListener("click", validateForm)

emailInput.addEventListener("input", validateEmail);
passwordVerification.addEventListener("change", validatePassword);

function validateEmail(event) {
    const emailIsValid = event.target.validity.valid;
    if (emailIsValid) {
        addSuccess(emailInput);
    } else {
        addError(emailInput, "Email isn't valid");
    }
}


function validatePassword() {
    const password1 = document.querySelector("#password");
    const password2 = document.querySelector("#password-verification");
    let passwordMatch = valuesMatch(password1.value, password2.value);
    let passwordLengthValid = moreThenEight(password1.value);
    
    if (passwordMatch && passwordLengthValid) {
        addSuccess(password1);
        addSuccess(password2);
    } 
    if (!passwordMatch) {
        const errorMessage = "*Passwords don't match";
        addError(password1);
        addError(password2, errorMessage);
    }
    if (!passwordLengthValid) {
        const errorMessage = "*Password length has to be 8 or more characters";
        addError(password1);
        addError(password2, errorMessage);
    }
    if (password1.value.length === 0) {
        const errorMessage = "*Please fill up the password"
        addError(password1);
        addError(password2, errorMessage);
    }  

    return passwordMatch && passwordLengthValid;
}

function validateZip() {
    const zipCode = document.querySelector("#zip-code");
    const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const zipIsValid = zipCode.value.match(zipRegex);
    if (zipIsValid) {
        addSuccess(zipCode);
    } else {
        addError(zipCode, "Zip doesn't exist");
    }
}

function valuesMatch(value1, value2) {
    return value1 === value2;
}

function moreThenEight(value) {
    return value.length >= 8;
}

function addError(element, errorMessage="") {
    const error = element.parentNode.querySelector("small");
    element.classList.add("error");
    element.classList.remove("success");
    error.classList.add("show-error");
    error.innerText = errorMessage;
}

function addSuccess(element) {
    const error = element.parentNode.querySelector("small");
    element.classList.remove("error");
    error.classList.remove("show-error");
    element.classList.add("success");
}

function validateForm(event) {
    event.preventDefault();
    const isPasswordValid = validatePassword();
    const isZipValid = validateZip();
    console.log(isPasswordValid);
}