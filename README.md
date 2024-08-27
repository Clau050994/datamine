# DATAMINE Project

## Overview

DATAMINE is a simple MERN (MongoDB, Express, React, Node.js) stack application designed to demonstrate the basic interaction between a frontend built with React and a backend API created with Express. This project serves as a basic template for understanding how a full-stack application operates, with a focus on API integration, serving static files, and handling CORS (Cross-Origin Resource Sharing).

## Features

- **Backend**: The backend is built with Node.js and Express, providing a simple API endpoint (`/api/test`) that returns a JSON response.
- **Frontend**: The frontend is a React application that fetches data from the backend API and displays it.
- **CORS Handling**: The backend is configured to handle CORS, allowing the frontend to communicate with the backend despite being served from a different port during development.


## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.

### Backend Setup

1. Navigate to the `root` directory:
    ```bash
    cd backend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

   The server will start on `http://localhost:4001` and provide an API endpoint at `http://localhost:4001/api/test`.

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd ./frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

   The React app will be served at `http://localhost:3000` and will attempt to fetch data from the backend API.

### Testing the API Endpoint

You can test the backend API endpoint by visiting `http://localhost:4001/api/test` in your browser or using tools like Postman or `curl`.

### Common Issues

- **CORS Errors**: Ensure that CORS is properly enabled in the backend using the `cors` middleware.
- **404 Not Found Errors**: Make sure the backend routes are correctly defined and that the API endpoints are correctly handled.

## Conclusion

This simple DATAMINE project serves as a foundational template for building and understanding full-stack MERN applications. It demonstrates how a React frontend can interact with an Express backend API, how to handle CORS for production.
