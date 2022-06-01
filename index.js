const init = () => {
  const inputEmail = document.querySelector('input[type="email"]');
  const inputPassword = document.querySelector('input[type="password"]');
  const loginForm = document.querySelector('form[name="loginForm"]');
  const messageLogin = document.querySelector('.messageLogin');
  const messageEmail = document.querySelector('.messageEmail');
  const messagePassword = document.querySelector('.messagePassword');

  loginForm.addEventListener('submit', (e) => {
    if(inputEmail.value == '' && inputPassword.value == '') {
      messageLogin.textContent = 'Todos os campos devem ser preenchidos'
    } else if(validateEmail(inputEmail.value) !== true) {
      messageEmail.textContent = 'Email deve possuir formato: abc@gmail.com'
    } else if(validatePassword(inputPassword.value) !== true) {
      messagePassword.textContent = 'Senha deve ser alfanumérico: aAbB#123'
    } else {
      messageEmail.textContent = ''
      messagePassword.textContent = ''
      window.location.href = "./home.html";
    }

    e.preventDefault();
  })

  function validateEmail(inputEmail) {
    const emailCheck = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailCheck.test(inputEmail)
  }
  
  function validatePassword(inputPassword) {
    const passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordCheck.test(inputPassword)
  }
}

window.onload = init;