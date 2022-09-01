const userName = document.getElementById('txtName');

const loginPassword = document.getElementById('loginPassword');

const loginButton = document.getElementById('login');

const form = document.getElementById('form');

const loginEmail = document.getElementById('loginEmail')


loginButton.disabled = true;



const validateUserName = () => {
    
    const firstNameValue = userName.value.trim();
    
    if (firstNameValue == '') {
        errorMessage(
          firstName,
          'First Name cannot be blank (First Name can accept any character except numbers)'
        );
        
    } else if (isValidName(firstNameValue)) {
        errorMessage(userName, 'UserName accept any character except numbers');
    } else {
        success(firstName);
    }
}


const validateLoginPassword = () => {
  const loginPasswordValue = loginPassword.value.trim()

  if (loginPasswordValue == '') {
    errorMessage(loginPassword, 'Password cannot be blank')
  } else if (!isValidPassword(loginPasswordValue)) {
    errorMessage(loginPassword, 'Password should be 8 characters long')
  } else {
      loginButton.disabled = false;
      success(loginPassword);
  }
}

const validateLoginEmail = () => {
  const loginEmailValue = loginEmail.value.trim();

  if (loginEmailValue == '') {
    errorMessage(loginEmail, 'Email cannot be blank');
  } else if (isEmail(loginEmailValue)) {
    errorMessage(loginEmail, 'Not a valid Email');
  } else {
    success(loginEmail);
  }
}


const errorMessage = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

const success = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success';
}

const isEmail = (loginEmail) => {
    mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    return loginEmail.match(mailformat);

}

const isValidPassword = (password) => {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
}


let emailValidation = loginEmail.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLoginEmail();
});


let passwordValidation = loginPassword.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLoginPassword();
});

if (emailValidation && passwordValidation) {
  loginButton.disabled = false;
};
