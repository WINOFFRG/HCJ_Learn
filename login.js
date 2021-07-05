import {errorObject} from '../authentication.js'


// Switch Forms

const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

// Alert Message

const note = document.querySelector('.alert');

function css(element, style) {
  for (const property in style)
      {
          element.style[property] = style[property];
      }
}

function openPopUp()
{
    note.style['display'] = 'block';
    console.log("Open Message");
    css(note, {display: 'block'});
}

function closePopUp()
{
    console.log("Closed Message");
    css(note, {display: 'none'});
}

var loginMessage = () => {

    var alertMessage = document.getElementById('alert-message');
    alertMessage.classList.remove("success-alert");
    alertMessage.classList.add("danger-alert");
    
    console.log(errorObject);
    document.getElementById('login-message').innerHTML = errorObject['errorMessageKey'];
    openPopUp();
    console.log("Error Message Popup");

    if(errorObject)         //If error is there then show red doesnt work now
    {
        console.log(errorObject);
        document.getElementById('login-message').innerHTML = errorObject['errorMessageKey'];
        openPopUp();
        console.log("Error Message Popup");
    }
    else if (errorObject === {})
    {
        console.log("Login Successfull Popup");
    }
}

document.querySelector('.close').addEventListener("click", closePopUp);
// document.getElementById('signin-button-submit').addEventListener("click", loginMessage); //Signin

export {loginMessage};