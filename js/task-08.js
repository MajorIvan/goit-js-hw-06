const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert ('All fields must be filled');
        return;
    };

    console.log({
        Email: email.value,
        Password: password.value
    });

    form.reset();
}