const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const isFormValid = [...loginForm.elements].every((element) => element.checkValidity());
  
  if (!isFormValid) {
    alert('Please fill in all required fields');
    return;
  }
  
  const formData = {};
  [...loginForm.elements].forEach((element) => {
    if (element.name) {
      formData[element.name] = element.value;
    }
  });
  
  console.log(formData);
  
  loginForm.reset();
});