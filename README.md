# Grocery Store: An Online Website

## Project Description

Grocery Store is an online grocery shopping website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features both admin and customer modules, allowing administrators to manage products and users, while customers can browse products, manage their shopping cart, and place orders. The application utilizes sessions, soft delete, pagination, and inventory management features.

### Modules

#### Administrator

The administrator module allows privileged users to perform various tasks:

- Add, update, and delete brands and products
- View and edit product details, including quantity in stock
- Filter products based on categories and brands

#### User

Regular users can perform the following actions:

- View the homepage and browse available products
- Register and login to their accounts
- Search for specific products
- Add products to their shopping cart
- Update or delete products from the cart
- Checkout to place orders
- View order history

## Technologies Used

- **Frontend:** HTML, CSS, Bootstrap, React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Setup Instructions

1. Clone the repository from [https://github.com/MeastroZI/Grocery_Backend_Db.git](#).
2. Install dependencies for both frontend and backend using npm or yarn.
3. Configure MongoDB database settings.
4. Run the backend server using `npm start` or `yarn start`.
5. Run the frontend server using `npm start` or `yarn start`.
6. Access the application through the provided URL.

## Contributors

- Vinit Pandit
- Virender Singh Rathore
- Suhani Shah
- Shivanshu Kumar
- Sapna Chaudhary

Create file `.env` and insert the following code. Replace the values with your credentials
```sh
MONGODB_URL=
PORT=  # optional
```
