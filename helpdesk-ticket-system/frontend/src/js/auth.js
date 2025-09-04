// This file handles user authentication processes, including login and registration.

const apiUrl = 'http://localhost:3000/api'; // Adjust the URL as needed

// Function to register a new user
async function registerUser(username, password) {
    const response = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

// Function to log in a user
async function loginUser(username, password) {
    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

// Function to check if the user is authenticated
function isAuthenticated() {
    return localStorage.getItem('token') !== null;
}

// Function to log out the user
function logoutUser() {
    localStorage.removeItem('token');
}

// Function to save the token in local storage
function saveToken(token) {
    localStorage.setItem('token', token);
}

// Function to get the token from local storage
function getToken() {
    return localStorage.getItem('token');
}

// Expose functions for use in other modules
window.registerUser = registerUser;
window.loginUser = loginUser;
window.isAuthenticated = isAuthenticated;
window.logoutUser = logoutUser;
window.saveToken = saveToken;
window.getToken = getToken;