// This file contains the main JavaScript logic for the frontend application, including functions to handle form submissions and interactions.

document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticketForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (ticketForm) {
        ticketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitTicket();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            loginUser();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            registerUser();
        });
    }

    function submitTicket() {
        const ticketData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            description: document.getElementById('description').value,
            priority: document.getElementById('priority').value,
        };

        fetch('/api/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(ticketData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Ticket submitted successfully!');
                ticketForm.reset();
            } else {
                alert('Error submitting ticket: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    function loginUser() {
        const loginData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('token', data.token);
                window.location.href = 'index.html';
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    function registerUser() {
        const registerData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful! You can now log in.');
                window.location.href = 'login.html';
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }
});