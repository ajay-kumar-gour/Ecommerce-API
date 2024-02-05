# E-Commerce Node API
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) 	![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
## Overview

This Node.js API serves as the backend for an e-commerce( majorly related to mobile phones )application. It provides endpoints for managing products and user authentication.

> [!NOTE]
> Live application hosted and deployed here : https://phonesphere.onrender.com

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

## Data Models

### Product Model

The product model represents the structure of a product in the e-commerce application.

#### Fields:

- **name** (String, required): The name of the product.
- **description** (String): A brief description of the product.
- **price** (String, required): The price of the product.
- **stock** (String, required): The available stock quantity.

#### Sample Product Data

    {
        "_id": "65b903f00f2624a971201ced",
        "name": "Apple iPhone",
        "description": "Premium smartphone with the latest features",
        "price": "One lakh and fifty thousand only",
        "stock": "100",
    },
    {
        "_id": "65b903f00f2624a971201cee",
        "name": "Google Pixel",
        "description": "High-quality camera and performance",
        "price": "Eighty thousand only",
        "stock": "180",
    },
    {
        "_id": "65b903f00f2624a971201cef",
        "name": "Sony Xperia",
        "description": "Sleek and stylish design with top-notch features",
        "price": "Seventy-five thousand only",
        "stock": "120",
    }

### User Model

The user model defines the structure for user data in the e-commerce system.

#### Fields:

- **Firstname** (String, required): The first name of the user.
- **Lastname** (String, required): The last name of the user.
- **username** (String, required): The unique username of the user.
- **email** (String, required, unique): The email address of the user (must be unique).
- **password** (String, required): The hashed password for user authentication.

#### Sample User Data

        {
            "_id": "65bbe4d2e9c6c2a36cdd326c",
            "Firstname": "TEST",
            "Lastname": "TEST",
            "username": "TEST",
            "email": "TEST@example.com",
            "password": "$2b$10$6u.hwIpvazG5Fk144AZb/uzTm4FbqUyU9jSQrZ8uyTSb3JnNuWcKG",

        }

Both models include timestamp fields for tracking the creation and update times.

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
## Screenshots
![POSTMAN](https://github.com/ajay-kumar-gour/Ecommerce-API/assets/153515139/db9f3bd2-58db-45e1-9cb5-4aef0205b2db)

![VS](https://github.com/ajay-kumar-gour/Ecommerce-API/assets/153515139/af0b0672-15d1-4adc-b9bb-a04e64f3dd0a)


## Usage

1. **Ensure MongoDB is running.**

2. **Interact with Endpoints:**
   - Use API testing tools like Postman to interact with the available endpoints.

   - **Create Product:**
     - Endpoint: `POST /product`
     - Payload: Provide product details in the request body.

   - **Get All Products:**
     - Endpoint: `GET /product`

   - **Get Product by Name:**
     - Endpoint: `GET /product/name/:name`
     - Replace `:name` with the desired product name.

   - **Get Product by ID:**
     - Endpoint: `GET /product/id/:id`
     - Replace `:id` with the desired product ID.

   - **Update Product by ID:**
     - Endpoint: `PUT /product/id/:id`
     - Replace `:id` with the desired product ID. Provide updated details in the request body.

   - **Delete Product by ID:**
     - Endpoint: `DELETE /product/id/:id`
     - Replace `:id` with the ID of the product to be deleted.

   - **Register User:**
     - Endpoint: `POST /register/user`
     - Payload: Provide user details in the request body.

   - **Login User:**
     - Endpoint: `POST /login/user`
     - Payload: Provide login credentials in the request body.

   - **Get All Users:**
     - Endpoint: `GET /users`

3. **Explore and Test:**
   - Explore other endpoints and test different scenarios using the provided API.

## Contributions

Contributions are welcome! If you have suggestions, found issues, or want to add new features, feel free to open issues or submit pull requests. Let's make this project better together!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
