//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// ------------------------------
// Load saved credentials on page load
// ------------------------------
window.onload = function () {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingBtn.style.display = "block"; // Show button
    }
};

// ------------------------------
// Submit button functionality
// ------------------------------
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert("Logged in as " + username);

    if (rememberCheckbox.checked) {
        // Save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
    } else {
        // Remove saved credentials
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
});

// ------------------------------
// Existing user login button
// ------------------------------
existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    alert("Logged in as " + savedUsername);
});
