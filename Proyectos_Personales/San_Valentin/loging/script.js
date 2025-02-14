document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
    } else if (username !== 'Isabel' || password !== '170524') {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    } else {
        errorMessage.textContent = '';
        alert('Inicio de sesión exitoso!');
    }
});