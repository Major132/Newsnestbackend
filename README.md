# NewsNest App

## Overview

This backend application serves as the server-side component for our project. It handles data processing, authentication, and communication with the database.

## Technologies Used

- **Language:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Authentication:** JSON Web Tokens ([JWT](https://jwt.io/))

## Setup

   

## Installation

1. **Install dependencies:** Run `npm install`.

## Database setup

1. **Install and configure MongoDB:** 
2. **Update the database configurations:** Modify `app.js` with your MongoDB configuration.

## Environment setup

1. **Create `.env` file:** 
    - Duplicate `.env.example`.
    - Configure environment variables in `.env`.

## Start the server

- Run `node app.js` to start the server.

## Endpoints

### User Authentication

- **Register:** `/register` - Register a new user.
- **Login:** `/login` - Log in an existing user.
- **Forgot Password:** `/forgot-password` - Send password reset link to user's email.

## Authentication

- This application uses JWT tokens for authentication. Include the JWT token in the `Authorization` header of your requests to access protected endpoints.

## Contributing

- Contributions are welcome! Please follow the guidelines outlined in `CONTRIBUTING.md`.

## License

- This project is licensed under the MIT License. See the `LICENSE` file for details.
