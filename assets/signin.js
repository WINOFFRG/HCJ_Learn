import firebase from "./firebase.js";

function signUpWithEmailPassword() {
  var email = document.querySelector('.user-input').value;
  var password = document.querySelector('.pass-input').value;
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

// firebase.auth().onAuthStateChanged(function(user) {

//   if (user) {
//       const queryString = window.location.search;
//       const urlParams = new URLSearchParams(queryString);
//       if ( urlParams.get('returnTo'))  {
//           window.location.href =  urlParams.get('returnTo');
//       } else {
//           window.location.href = "./dashboard.html"
//       }
//   }
// });

function signInWithEmailPassword() {
  var email = document.querySelector('.user-input').value;
  var password = document.querySelector('.pass-input').value;

  console.log(email, ":", password);

  if(email === null|| password === null)
  return;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // [END auth_signin_password]
}

function signOut(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
  });
}

document.getElementById('signup-button-submit').addEventListener("click", signUpWithEmailPassword);
document.getElementById('signin-button-submit').addEventListener("click", signInWithEmailAndPassword);

// document.getElementById('Logout').addEventListener("click", signOut);

/*===== LOGIN SHOW and HIDDEN =====*/
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
