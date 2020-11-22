const nodeMailer=require('../config/node-mailer');

module.exports.forgotPassword=function(email,Token){
   
    nodeMailer.transporter.sendMail({
        from: 'sudhanshusocial42@gmail.com',          // sender address
        to:email ,  // list of receivers
        subject: "Forgot Password",     //  Subject line
        html: `<a href='www.localhost:8000/users/newpassword/?token=${Token}'>click here to reset password</a>`, // html body
      },function(err,info){
      if(err){console.log("err in sending mail: ",err); return;}
      console.log("message sent",info);
      return;
      });

}
