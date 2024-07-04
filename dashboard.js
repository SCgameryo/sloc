let scoins = 0;

function incrementSCoins() {
    scoins += 5; // Increment SCoins by 5 per kill
    document.getElementById('scoins').innerText = scoins;
}

function logout() {
    // Clear localStorage and redirect to login page
    localStorage.clear();
    window.location.href = 'login.html';
}

function loadGame() {
    // Change iframe src to load BananaBread game
    let gameFrame = document.getElementById('gameFrame');
    gameFrame.src = 'https://kripken.github.io/BananaBread/cube2/bb.html';

    // Display game container
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.style.display = 'block';

    // Maximize iframe (fill viewport)
    gameFrame.style.width = '100%';
    gameFrame.style.height = '100%';
}

// Display username on the dashboard
document.getElementById('username').innerText = localStorage.getItem('username');

// Example: Listen for game events to increment SCoins (dummy function for demonstration)
function gameEventOccurred() {
    incrementSCoins(); // Call this function when a game event (like a kill) occurs
}
