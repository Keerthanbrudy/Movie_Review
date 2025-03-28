// Register User
function registerUser() {
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("User already exists! Try logging in.");
        return;
    }

    localStorage.setItem(email, JSON.stringify({ password }));
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
}

// Login User
function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const userData = localStorage.getItem(email);
    if (!userData) {
        alert("User not found! Please register first.");
        return;
    }

    const user = JSON.parse(userData);
    if (user.password === password) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to main page
    } else {
        alert("Incorrect password! Try again.");
    }
}

// Logout User
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Check if user is logged in
function checkAuth() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html";
    }
}
