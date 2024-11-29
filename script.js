// Optional: Add a simple countdown or any other functionality here
// Example: Displaying a future release date in the console

const releaseDate = new Date("December 31, 2024 00:00:00").getTime();
const countdownTimer = setInterval(function() {
    let now = new Date().getTime();
    let distance = releaseDate - now;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.content').innerHTML = "<h1>We Are Live!</h1><p>The website is now live. Welcome!</p>";
    }
}, 1000);
