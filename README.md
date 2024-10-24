Assignment: Daily Expenses Sharing Application 

It is the required Backend for managing expenses among different individuals. Some of the features of this application include -

1> User Signup and login with the help of JWT.
2> The user can also Add, view, and manage expenses with different split methods such as equal, exact and percentage.
3> View expenses for each user and calculate the total amount spent.
4> View all expenses and calculate the total amount spent across all users.
5> Download a balance sheet of expenses.

The Technologies used are NodeJS, ExpressJS, MongoDB and JWT(JSON Web Token) for authentication.

The Installation is pretty simple . The following steps could be used-

1> Run this command in CLI and the repository would be cloned
      https://github.com/vaibhav23-02/SplitWise-Assignment.git
      cd SplitWise-Assignment
2> Install all dependencies by using this command
      npm install
3> Create an env file in the root directory
   PORT=8000
   MONGO_URI= mongodb_connection_string
   JWT_SECRET= required_jwt_secret
4> Start the server by running the command node app.js

The required API EndPoints are -

1> POST /api/users/ - Registering a new user
2> POST /api/users/login - User Login
3> GET /api/users/logout - User Logout
4> GET /api/users/:id - Get user details
5> POST /api/expenses/ - Adding new expense
6> GET /api/expenses/individual - Get individual expenses
7> GET /api/expenses/overall - Get overall expenses
8> GET /api/expenses/balance-sheet - Download balance sheet
