const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', (event) => { 
    let inputText;
    if (isNaN(event.target.value)) {
        inputText = event.target.value; 
    } else {
        inputText = '';
    };

    if (inputText === '') {
        userNameOutput.textContent = 'Anonymous';
    }  else {
        userNameOutput.textContent = inputText;
    }
});