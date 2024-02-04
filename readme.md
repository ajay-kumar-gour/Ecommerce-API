# E-Commerce Node API

## Overview

This Node.js API serves as the backend for an e-commerce application. It provides endpoints for managing products and user authentication.

## Features

- **Product Management:**

  - Create, Read, Update, and Delete products
  - Get all products or search by name or ID

- **User Management:**
  - Register new users
  - Authenticate users with JWT
  - Get all users

## API Endpoints

### Product Management

1. **Create Product:**

   - Endpoint: `POST /product`
   - Description: Create a new product with specified details.

2. **Get All Products:**

   - Endpoint: `GET /product`
   - Description: Retrieve a list of all products available.

3. **Get Product by Name:**

   - Endpoint: `GET /product/name/:name`
   - Description: Search for products by name.

4. **Get Product by ID:**

   - Endpoint: `GET /product/id/:id`
   - Description: Fetch a specific product by its unique identifier.

5. **Update Product by ID:**

   - Endpoint: `PUT /product/id/:id`
   - Description: Modify the details of a specific product.

6. **Delete Product by ID:**
   - Endpoint: `DELETE /product/id/:id`
   - Description: Remove a product from the database.

### User Management

1. **Register User:**

   - Endpoint: `POST /register/user`
   - Description: Create a new user account.

2. **Login User:**

   - Endpoint: `POST /login/user`
   - Description: Authenticate and obtain a JWT token for accessing protected routes.

3. **Get All Users:**
   - Endpoint: `GET /users`
   - Description: Retrieve a list of all registered users.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT) for authentication
- Bcrypt for password hashing

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ajay-kumar-gour/Ecommerce-API

   ```

2. **Install dependencies:**
   ```bash
   cd e-commerce-node-api
   npm install
   ```
3. **Set up environment variables:**
   Create a .env file in the root directory and configure your MongoDB connection string and other necessary variables.

```bash
PORT=8000
MONGO_URI=mongodb://localhost:27017/e_commerce_db
SECRET=your_secret_key
```

4. **Run the application:**

```bash
npm start
```
