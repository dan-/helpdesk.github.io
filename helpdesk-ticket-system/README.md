# Help Desk Ticket System

This project is a Help Desk Ticket System that allows users to submit tickets, manage them, and authenticate using a user ID and password. It consists of a backend built with Node.js and Express, and a frontend built with HTML, CSS, and JavaScript.

## Project Structure

```
helpdesk-ticket-system
├── backend
│   ├── src
│   │   ├── app.js               # Entry point of the backend application
│   │   ├── routes               # Contains route definitions
│   │   │   ├── auth.js          # User authentication routes
│   │   │   └── tickets.js       # Ticket management routes
│   │   ├── models               # Database models
│   │   │   ├── user.js          # User model
│   │   │   └── ticket.js        # Ticket model
│   │   └── middleware           # Middleware functions
│   │       └── auth.js          # Authentication middleware
│   ├── package.json             # NPM configuration file
│   └── README.md                # Backend documentation
├── frontend
│   ├── src
│   │   ├── index.html           # Main HTML file
│   │   ├── login.html           # User login page
│   │   ├── register.html        # User registration page
│   │   ├── js                   # JavaScript files
│   │   │   ├── main.js          # Main frontend logic
│   │   │   ├── auth.js          # Authentication logic
│   │   │   └── api.js           # API call functions
│   │   └── css                  # CSS styles
│   │       └── styles.css       # Styles for the frontend
│   └── README.md                # Frontend documentation
└── README.md                    # Overall project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB (or any other database of your choice)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd helpdesk-ticket-system
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies (if applicable):
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node src/app.js
   ```

2. Open the frontend in your browser:
   - Navigate to `frontend/src/index.html` or set up a local server to serve the frontend files.

### Usage

- Users can register and log in to submit tickets.
- Tickets can be viewed, updated, and managed through the interface.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.