const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const passwordConfirm = document.querySelector('#password-confirm').value.trim();

  if (firstName && lastName && email && password) {
    if (password !== passwordConfirm) {
      $('#password-mismatch').toast('show');
    } else if (password.length < 8) {
      $('#password-length').toast('show');
    } else {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 400) {
        $('#register-exists').toast('show');
      } else if (response.ok) {
        document.location.replace('/');
      } else {
        $('#register-error').toast('show');
      }
    }
  } else {
    $('#register-warning').toast('show');
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
