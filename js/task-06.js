const inputValue = document.querySelector('#validation-input');
const validLength = inputValue.getAttribute('data-length');

inputValue.addEventListener('blur', handleBlur);

function handleBlur(event) {
    const someEnteredValue = event.currentTarget.value
    if (someEnteredValue.length === Number(validLength)) {
        inputValue.classList.add('valid');
        inputValue.classList.remove('invalid');
    } else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid');
    }
}