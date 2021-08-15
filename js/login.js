document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    console.log(userEmail);
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    if (userEmail == 'polash@gmail.com' && userPassword == 'secret') {
        window.location.href = 'js/bank.html';
    }
    else {
        console.log('Not valied value');
    }
})