const nodemailer=require('nodemailer');

module.exports.transporter=nodemailer.createTransport({
       service:'gmail',
       host  :'smtp.gmail.com',
       port: 587,
       secure: false,
       auth: {
           user:'sudhanshusocial42', 
           pass:'Gujjar043' 
       }
});

