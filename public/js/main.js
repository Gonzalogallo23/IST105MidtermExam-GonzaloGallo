/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

// Listener para la carga de la ventana
window.addEventListener('load', function () {

    // Manejar el inicio de sesión con Google
    document.getElementById('sign-in-button').addEventListener('click', function () {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Login successfully', result.user);
                // Redirigir a culturalconnections.html
                location.href = 'culturalconnections.html';
            })
            .catch(function (error) {
                console.log('Login failed', error);
            });
    });

    // Manejar el inicio de sesión con correo y contraseña
    document.getElementById('sign-in-2').addEventListener('click', function () {
        let emailTxt = document.getElementById('email').value;
        let passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                // El usuario ha iniciado sesión
                console.log('Login successfully');
                alert('Login successfully');
                // Redirigir a culturalconnections.html
                location.href = 'culturalconnections.html';
            })
            .catch((error) => {
                let errorMessage = error.message;
                console.log('Login failed', errorMessage);
                alert(errorMessage); // Mostrar mensaje de error al usuario
            });
    });

    // Manejar el envío del código de verificación para el inicio de sesión con número de teléfono
    document.getElementById('send-code').addEventListener('click', function () {
        let phoneNumber = document.getElementById('phone').value;
        let appVerifier = new firebase.auth.RecaptchaVerifier('send-code', {
            'size': 'invisible' // o 'normal' para mostrar el reCAPTCHA
        });

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS enviado. Pregunta al usuario por el código de verificación.
                window.confirmationResult = confirmationResult;
                alert('Código de verificación enviado.');
            }).catch((error) => {
                console.log('Error al enviar el código de verificación', error);
                alert(error.message); // Mostrar mensaje de error
            });
    });

    // Manejar la verificación del código de número de teléfono
    document.getElementById('sign-in-phone').addEventListener('click', function () {
        let verificationCode = document.getElementById('verification-code').value;
        confirmationResult.confirm(verificationCode).then((result) => {
            // Usuario confirmado
            console.log('Login successfully', result.user);
            alert('Login successfully');
            // Redirigir a culturalconnections.html
            location.href = 'culturalconnections.html';
        }).catch((error) => {
            console.log('Error al verificar el código', error);
            alert(error.message); // Mostrar mensaje de error
        });
    });
});

