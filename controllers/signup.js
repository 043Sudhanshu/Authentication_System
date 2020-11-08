const user=require('../models/user');

module.exports.signup=function(req,res){

    user.findOne({email:req.body.email},function(err,USER){
        if(USER){
          return res.redirect('back');
        }
        else{
            if(req.body.password===req.body.confirmpassword){
            user.create(req.body,function(err,USER){});
            return res.redirect('/');
         }
    }
    });

   
}
