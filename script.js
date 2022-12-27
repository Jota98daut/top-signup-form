const signupForm = document.querySelector('#signup-form');
// const signupInputs = document.querySelectorAll('#signup-form input');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');
const passwordErrorMessage = document.querySelector('#password-error-wrapper>p');

signupForm.addEventListener('submit', handleSignupSubmit);

function handleSignupSubmit(e) {
  if(passwordInput.value != passwordConfirmInput.value) {
    passwordInput.classList.add('error');
    passwordInput.value = '';
    passwordConfirmInput.classList.add('error');
    passwordConfirmInput.value = '';
    passwordErrorMessage.textContent = 'password don\'t match';
    passwordInput.focus();
    e.preventDefault();
  }
}
