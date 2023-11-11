const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formData = new FormData(loginForm);
  const formObject = {};

  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(formObject);
    loginForm.reset();
  }
});

