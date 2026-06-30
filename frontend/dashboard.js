// ===========================================
// Authentication System Dashboard
// ===========================================

// ------------------------------
// Read JWT
// ------------------------------

const params = new URLSearchParams(window.location.search);

let token = localStorage.getItem("token");

// Token coming from Keycloak callback
if (!token && params.has("token")) {

    token = params.get("token");

    localStorage.setItem("token", token);

    // Remove token from URL
    window.history.replaceState(
        {},
        document.title,
        "dashboard.html"
    );

}

// ------------------------------
// No Token
// ------------------------------

if (!token) {

    window.location.href =
        "http://localhost:5500/";

}

// ------------------------------
// Decode JWT
// ------------------------------

let payload;

try {

    payload =
        JSON.parse(
            atob(
                token.split(".")[1]
            )
        );

}
catch (err) {

    console.error(err);

    logout();

}

// ------------------------------
// Expired Session
// ------------------------------

if (
    payload.exp &&
    payload.exp * 1000 < Date.now()
) {

    alert("Your session has expired.");

    logout();

}

// ------------------------------
// Welcome
// ------------------------------

document.getElementById("welcome").innerHTML =

    `<i class="fa-solid fa-hand-wave"></i> Welcome ${payload.username}`;

// ------------------------------
// Username
// ------------------------------

document.getElementById("username").innerText =
    payload.username || "N/A";

// ------------------------------
// Email
// ------------------------------

document.getElementById("email").innerText =
    payload.email || "N/A";

// ------------------------------
// Group
// ------------------------------

let role = "Unknown";

switch (payload.group_id) {

    case 1:

        role = "Administrator";

        break;

    case 2:

        role = "Developer";

        break;

    case 3:

        role = "User";

        break;

}

document.getElementById("group").innerText =
    role;

// ------------------------------
// Login Type
// ------------------------------

document.getElementById("loginType").innerText =

    payload.login_type === "openid"

        ? "Keycloak"

        : "Local";
// ------------------------------
// Show JWT Token
// ------------------------------

document.getElementById("jwtToken").value = token;
// ------------------------------
// Copy JWT
// ------------------------------

function copyToken() {

    navigator.clipboard.writeText(token);

    alert("JWT copied to clipboard!");

}
// ------------------------------
// Logout
// ------------------------------

function logout() {

    localStorage.removeItem("token");

    sessionStorage.clear();

    window.location.href =
        "http://localhost:5500/";

}