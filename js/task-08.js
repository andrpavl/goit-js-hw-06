const form = document.querySelector('.login-form')

form.addEventListener('submit', submitHandler)

function submitHandler (event) {
    event.preventDefault();
    const inputEmail = form.elements['email'];
    const inputPassword = form.elements['password'];

    if (inputEmail.value === "" || inputPassword.value === "") {
       alert("Remember! It works only when both fields are filled in)))");
    }
    
    console.log(`Login: ${inputEmail.value}, Password: ${inputPassword.value}`);
    event.currentTarget.reset();
}
