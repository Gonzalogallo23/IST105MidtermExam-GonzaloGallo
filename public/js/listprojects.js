/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

/*
Function onAuthStateChanged(user)
Write a function to check if a user is logged
*/


window.addEventListener('load', function () {

  //Listen for auth state changes
  //firebase.auth().onAuthStateChanged(onAuthStateChanged);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
    } else {
      console.log(window.location.pathname == '/culturalconnections.html');
      console.log(window.location.pathname + '/culturalconnections.html');
  
  
      if (window.location.pathname == '/culturalconnections.html') {
        window.location.href = 'index.html'; 
      }
    }
  });

// Assuming you already have this at the top of your auth.js
import { getAuth, signOut } from "firebase/auth"; // Import the signOut method

const auth = getAuth();

window.addEventListener('load', function () {
    // Existing sign-in logic...

    // Add the logout functionality
    document.getElementById('logout').addEventListener('click', function () {
        signOut(auth).then(() => {
            console.log('User signed out.');
            // Redirect to index.html after successful logout
            location.href = 'index.html';
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    });
});
