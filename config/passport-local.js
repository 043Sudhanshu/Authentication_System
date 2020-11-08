const passport=require('passport');
const localstrategy=require('passport-local').Strategy;
const user=require('../models/user');

passport.use(new localstrategy({
    usernameField:'email',
},function(Email,password,done){
      console.log("1");
    user.findOne({email:Email},function(err,USER){
        if(err){return done(err);}
        if(!USER || password!=USER.password){
            return done(null,false);
        }else{
            console.log("Authenticated user");
         return done(null,USER);
        }
    });

}));

passport.serializeUser(function(USER,done){
    console.log("2");
       return done(null,USER.id);                         // user.id and user._id are same
});

passport.deserializeUser(function(id,done){
   console.log("3");
    user.findById(id,function(err,USER){
     if(err){
         return done(err);
     }
     return done(null,USER);
    });
});

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
       return next();
    }
    return res.redirect('/users/login');
}

passport.setUserToLocals=function(req,res,next){
    console.log("in set user to locals",req.isAuthenticated());
   if(req.isAuthenticated()){
    res.locals.user=req.user;
    }
    next();
}



module.exports=passport;