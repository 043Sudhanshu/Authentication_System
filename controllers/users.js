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
    return res.render('forgotpassword');
}

const nodemailer=require('../mailers/forgotPassword');
const TOKEN=require('../models/token');

module.exports.forgotpassword=async function(req,res){
   
    let USER=await user.findOne({email:req.body.email});
       if(USER){
           let  crypto=   123;
         let Token =await  TOKEN.create({
                        userid:USER._id,
                        token:crypto,
                        isvalid:true
                    });

           
           nodemailer.forgotPassword(req.body.email,Token.token);
           req.flash('success','link sent to this email');
           return res.redirect('back');
       }
       else{
           req.flash('error','This email do not exists in the database');
           return res.redirect('back');
       }
    
}



module.exports.newpassword=function(req,res){
    
    console.log(req.query);

}