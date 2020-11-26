const user=require('../models/user');

module.exports.passwordreset=function(req,res){
    user.findById(req.user._id,function(err,USER){
        if(err){
            console.log('error in resetting password');
            return;
        } 
        if(USER.password==req.body.oldpassword && req.body.password==req.body.confirmpassword){
             USER.password=req.body.password;
             USER.save();
             req.flash('success','password changed');
             return res.redirect('/');
         }
         else{
            req.flash('error','password not changed');
             return res.render('resetPassword');
         }
    });
}

module.exports.forgotpage=function(req,res){
    return res.render('sendlink');
}

const nodemailer=require('../mailers/forgotPassword');
const TOKEN=require('../models/token');
const crypto=require('crypto');

module.exports.sendlink=async function(req,res){
   
    let USER=await user.findOne({email:req.body.email});
       if(USER){
           let  hex=crypto.randomBytes(20).toString('hex');  
         let Token =await  TOKEN.create({
                        userid:USER._id,
                        token:hex,
                        isValid:true
                    });
                    setTimeout(function(){
                        Token.remove();
                     },20000);
        
           
           nodemailer.forgotPassword(req.body.email,Token.token);
           req.flash('success','link sent to this email');
           return res.redirect('back');
       }
       else{
           req.flash('error','This email do not exists in the database');
           return res.redirect('back');
       }
    
}


/***through gmail****/


module.exports.newpassword=function(req,res){
  
    TOKEN.findOne({token:req.query.token},function(err,Token){
     if(!Token){
        return res.end('<h1> TOKEN EXPIRED </h1>');
     }else{

            return res.render('forgotByMail',{
                    isvalid:Token.isValid,
                    token:Token.token
            });
        } 
   });

}

