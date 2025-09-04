# Help Desk Ticket System - Backend

## Overview
This backend application serves as the server-side component of the Help Desk Ticket System. It is built using Node.js and Express, providing a RESTful API for user authentication and ticket management.

## Features
- User registration and login functionality with password hashing.
- Ticket creation, viewing, and updating.
- Middleware for protecting routes and ensuring user authentication.

## Technologies Used
- Node.js
- Express
- MongoDB (via Mongoose)
- JSON Web Tokens (JWT) for authentication

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd helpdesk-ticket-system/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add the following variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the server:
   ```
   npm start
   ```

### API Endpoints

#### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

#### Tickets
- **POST /api/tickets**: Create a new ticket (requires authentication).
- **GET /api/tickets**: Retrieve all tickets (requires authentication).
- **GET /api/tickets/:id**: Retrieve a specific ticket by ID (requires authentication).
- **PUT /api/tickets/:id**: Update a specific ticket by ID (requires authentication).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.