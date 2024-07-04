document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Check if user already exists in localStorage
    if (localStorage.getItem(username)) {
        document.getElementById('message').innerText = 'Username already exists. Please choose another.';
    } else {
        // Store user credentials in localStorage
        localStorage.setItem(username, password);
        document.getElementById('message').innerText = 'Signup successful for ' + username;
    }
});
