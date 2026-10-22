/* JESMARK FAUSTO - PORTFOLIO SCRIPT */

const themeToggle = document.getElementById("themeToggle");
const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const year = document.getElementById("year");

// Automatic copyright year
if (year) {
    year.textContent = new Date().getFullYear();
}

// Light and dark theme toggle
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const isLight = document.body.classList.contains("light-mode");

        themeToggle.textContent = isLight ? "☾" : "☀";
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    });
}

// Welcome message
if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", function () {
        welcomeMessage.textContent =
            "Welcome to Jesmark Fausto's portfolio! Thank you for visiting. 💜";
    });
}