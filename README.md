# NM_Project_Grocery
## Grocery
## Table of contents

- [Introduction](#introduction)
- [Team Members](#Team-Members)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)

## Introduction

A virtual ecommerce website using Node js, Express js, and Mongoose.

NOTE: Please read the RUN section before opening an issue.

## Team Members
1.tharun prasath
2.tharun kumar
3. Suresh 
4. Chakil srinivas

## Demo
![Screenshot (1)](https://github.com/user-attachments/assets/e73d08ee-deba-4305-a222-b541234c0707)
![Screenshot (2)](https://github.com/user-attachments/assets/8415fd07-9324-41d2-83bc-5f3722a7a845)
![Screenshot (4)](https://github.com/user-attachments/assets/3f6cfd14-dbd9-49a0-918e-dd46c75bf2d5)
![Screenshot (5)](https://github.com/user-attachments/assets/f19b4918-3b12-4ed0-aa17-a06d5bd3d686)
![Screenshot (6)](https://github.com/user-attachments/assets/173f906f-61d2-45b0-8abf-ac08bdd5d8be)
![Screenshot (7)](https://github.com/user-attachments/assets/951d4caa-159a-4b36-bd54-ba9948ad4a87)
![Screenshot (8)](https://github.com/user-attachments/assets/f4fd31c0-7159-4abe-871c-c0920d3928c4)
![Screenshot (9)](https://github.com/user-attachments/assets/76de18b0-db21-446b-84dd-a6834ef2b7ff)

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI: this is the connection string of your MongoDB Atlas database.

- SESSION_SECRET: a secret message for the session. You can use any string here.

- STRIPE_PRIVATE_KEY: the stripe package is used to process payment in the checkout route. To get this, you should set up a stripe account and put your private API key here.

- GMAIL_EMAIL, GMAIL_PASSWORD: the email and password given to nodemailer to send/receive the email. Please put a real email and password here because you will receive the messages sent from the contact us form on this email.

- ADMIN_EMAIL, ADMIN_PASSWORD: the email and password used to log into the admin panel using AdminBro. You can put any email and password here.

- ADMIN_COOKIE_NAME, ADMIN_COOKIE_PASSWORD: the cookie name and password used in the AdminBro authentication method. You can put any strings here.

After you've set these environmental variables in the .env file at the root of the project, you need to navigate to the "seedDB" folder and run "node category-seed.js" and "node products-seed.js" to fill your empty MongoDB Atlas database.

Now you can run "npm start" in the terminal and the application should work.

## Technology

The application is built with:

 Frontend
  
-React.js

-Bootstrap version 4.4.1

-FontAwesome version 5.13.0

  Backend

-Node.js version 12.16.3

-MongoDB version 4.2.0

-Express version 4.16.1

-Passport: used for authentication

-Express Validator: used for form validation


## Features

The application displays a virtual bags store that contains virtual products and contact information.

Users can do the following:

- Create an account, login or logout
- Browse available products added by the admin
- Add products to the shopping cart
- Delete products from the shopping cart
- Display the shopping cart
- To checkout, a user must be logged in
- Checkout information is processed using stripe and the payment is send to the admin
- The profile contains all the orders a user has made

Admins can do the following:

- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, products and categories. The cart model cannot be modified by an admin because a cart is either modified by the logged in user before the purchase or deleted after the purchase.

## Database

All the models can be found in the models directory created using mongoose.

### User Schema:

- username (String)
- email (String)
- password (String)

### Category Schema:

- title (String)
- slug (String)

### Product Schema:

- productCode (String)
- title (String)
- imagePath (String)
- description (String)
- price (Number)
- category (ObjectId - a reference to the category schema)
- manufacturer (String)
- available (Boolean)
- createdAt (Date)

### Cart Schema:

- items: an array of objects, each object contains: <br>
  ~ productId (ObjectId - a reference to the product schema) <br>
  ~ qty (Number) <br>
  ~ price (Number) <br>
  ~ title (String) <br>
  ~ productCode (Number) <br>
- totalQty (Number)
- totalCost (Number)
- user (ObjectId - a reference to the user schema)
- createdAt
  <br><br>
  \*\*The reason for including the title, price, and productCode again in the items object is AdminBro. If we are to write our own admin interface, we can remove them and instead populate a product field using the product id. However, AdminBro doesn't populate deep levels, so we had to repeat these fields in the items array in order to display them in the admin panel.

### Order Schema:

- user (ObjectId - a reference to the user schema)
- cart (instead of a reference, we had to structure an object identical to the cart schema because of AdminBro, so we can display the cart's contents in the admin interface under each order)
- address (String)
- paymentId (String)
- createdAt (Date)
- Delivered (Boolean)
