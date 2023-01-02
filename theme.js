const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === "") {
        setError(username, "username is required");
    } else {
        setSuccess(username);
    }
    if (emailValue == "") {
        setError(email, 'email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'provide valid mail address');
    } else {
        setSuccess(email);
    }

    if (passwordValue == "") {
        setError(password, 'enter the password');
    } else if (passwordValue.length < 6) {
        setError(password, 'too short');
    } else {
        setSuccess('password');
    }
    if (password2Value == "") {
        setError(password2, 'confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2Value, 'does not match');
    } else {
        setSuccess(password2Value);
    }
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innertext = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}