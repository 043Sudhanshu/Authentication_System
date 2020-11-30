# Authentication_System
Starter code of any website having authentication System ,I have used passport local strategy and passport google oauth2
# How-To-Use
Clone this project\
Start by installing npm and mongoDB if you don't have them already.\
Run the Mongo Server.\
Create a google login credentials and subsequently a google Oauth ID. Refer this : https://developers.google.com/identity/protocols/oauth2 .Don't share these crednetials with anyone.\
Create a dummy email id which can be used by mailer. (You have to make your dummy account less secure by going into mail settings). Try to avoid your personal mail id.
Navigate to Project Directory:\
run following commands :\
npm install \
node index.js
# Basic-Features
Basic Sign up and Sign in functionality with proper authentication on backend (Manual and Google OAuth both).\
Mailer for forgot password.\
Mailer for security ie, if a user changes password a mail is sent with access token which can be used by them to restore account if compromised.\
Proper Notifications using noty.\
Reset password if authenticated manually.
# Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

/routes - containes all the routes.

/assets - static js css and image files.

/controller - contains functions to connect to different views.

/models - to store data in db we need models.

/config - contains config files for mongoos, passport, node mailer or any other configs.

/views - used by ejs(templating engine) for server side rendering.

/mailers - used by nodemailer for basic mailing functionalies

Feel free to use and contribute! :)
