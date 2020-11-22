const user=require('../models/user');

module.exports.createUser=function(req,res){
  
    user.findOne({email:req.body.email},function(err,USER){
      
      if(USER){
        req.flash('error','This email exists');
        return res.redirect('back');
      }
      else if(req.body.password!==req.body.confirmpassword){
        req.flash('error','password and confirm password are not same');
        return res.redirect('back');
      }else{
        user.create(req.body,function(err,User){});
        req.flash('success','Your account is created');
        return res.redirect('/signin');
      }
       
    
    });

   
}
