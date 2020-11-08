const user=require('../models/user');

module.exports.createUser=function(req,res){
    console.log('coming here');
    user.findOne({email:req.body.email},function(err,USER){
      
      if(!USER && req.body.password!==req.body.confirmpassword){
        return res.redirect('back');
      }else{
        user.create(req.body,function(err,User){});
        return res.redirect('/');
      }
       
    
    });

   
}
