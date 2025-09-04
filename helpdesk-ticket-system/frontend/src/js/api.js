// This file contains functions for making API calls to the backend, such as fetching tickets and submitting new tickets.

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust the base URL as needed

async function fetchTickets() {
    try {
        const response = await fetch(`${API_BASE_URL}/tickets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch tickets');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Error fetching tickets. Please try again later.');
    }
}

async function submitTicket(ticket) {
    try {
        const response = await fetch(`${API_BASE_URL}/tickets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to submit ticket');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Error submitting ticket. Please try again later.');
    }
}

async function registerUser(user) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Error registering user. Please try again later.');
    }
}

async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token for future requests
        return data;
    } catch (error) {
        console.error(error);
        alert('Error logging in. Please check your credentials and try again.');
    }
}