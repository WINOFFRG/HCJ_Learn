import firebase from "./firebase.js";

function signUpWithEmailPassword() {
  var email = document.querySelector('.login__input_email').value;
  var password = document.querySelectorAll('.login__input_password')[1].value;
  
  if(email === ""|| password === "")
  {
    console.log("Invalid Entry");
    return;
  }

  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
}

function signInWithEmailPassword() {
  var email = document.querySelector('.login__input_username').value;
  var password = document.querySelector('.login__input_password').value;

  console.log("Sign in Values Passed = " + email + " : " + password);

  if(email === "" || password === "")
  {
    console.log("Invalid Entry");
    // return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  // [END auth_signin_password]
}

document.getElementById('signin-button-submit').addEventListener("click", signInWithEmailPassword); //Signin
document.getElementById('signup-button-submit').addEventListener("click", signUpWithEmailPassword); //Signup

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      if ( urlParams.get('returnTo'))  {
          window.location.href =  urlParams.get('returnTo');
          console.log(user);
      } else {
          window.location.href = "./dashboard.html"
          console.log(user);
      }
  }
});

/*===== LOGIN SHOW and HIDDEN =====*/
// const signUp = document.getElementById('sign-up'),
//     signIn = document.getElementById('sign-in'),
//     loginIn = document.getElementById('login-in'),
//     loginUp = document.getElementById('login-up')


// signUp.addEventListener('click', ()=>{
//     // Remove classes first if they exist
//     loginIn.classList.remove('block')
//     loginUp.classList.remove('none')

//     // Add classes
//     loginIn.classList.toggle('none')
//     loginUp.classList.toggle('block')
// })

// signIn.addEventListener('click', ()=>{
//     // Remove classes first if they exist
//     loginIn.classList.remove('none')
//     loginUp.classList.remove('block')

//     // Add classes
//     loginIn.classList.toggle('block')
//     loginUp.classList.toggle('none')
// })
