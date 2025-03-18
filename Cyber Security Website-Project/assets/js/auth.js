document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const user = JSON.parse(localStorage.getItem("user"));

            if (user && user.email === email && user.password === password) {
                localStorage.setItem("loggedIn", "true");
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid credentials.");
            }
        });
    }

    // Redirect if already logged in
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "dashboard.html";
    }
});
