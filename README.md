
# Assignment: Daily Expenses Sharing Application

It is the required Backend for managing expenses among different individuals.The Technologies used are NodeJS, ExpressJS, MongoDB and JWT(JSON Web Token) for authentication.


## Features

 - User Signup and login with the help of JWT.
 -  The user can also Add, view, and manage expenses with different split methods such as equal, exact and percentage.
 - View expenses for each user and calculate the total amount spent. 
 - View all expenses and calculate the total amount spent across all users. 
 - Download a balance sheet of expenses.


## Installation

Run this command in CLI and the repository would be cloned  

```bash
  https://github.com/vaibhav23-02/SplitWise-Assignment.git
  cd SplitWise-Assignment
```

 Install all dependencies by using this command   

```bash
  npm install
```
Create an env file in the root directory containing these information 
```bash
 PORT= 8000 
 MONGO_URI= mongodb_connection_string 
 JWT_SECRET= required_jwt_secret 
```
Start the server by running the command node app.js
```bash
 node app.js
 ```
## API EndPoints
- POST /api/users/ - Registering a new user 
- POST /api/users/login - User Login 
- GET /api/users/logout - User Logout 
- GET /api/users/:id - Get user details 
- POST /api/expenses/ - Adding new expense  
- GET /api/expenses/individual - Get individual expenses 
- GET /api/expenses/overall - Get overall expenses 
- GET /api/expenses/balance-sheet - Download balance sheet
