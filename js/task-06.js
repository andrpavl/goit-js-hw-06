const inputEl = document.querySelector('#validation-input')
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
})
