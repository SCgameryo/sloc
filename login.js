document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Retrieve stored password from localStorage based on username
    let storedPassword = localStorage.getItem(username);

    // Check if stored password matches entered password
    if (password === storedPassword) {
        // Redirect to dashboard upon successful login
        window.location.href = 'dashboard.html';

        // Alternatively, you can show a success message
        // document.getElementById('message').innerText = 'Login successful for ' + username;
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }
});
