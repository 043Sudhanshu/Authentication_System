module.exports.login=function(req,res){
    if(req.isAuthenticated()){
        return res.render('loggedin');
    }else{
    return res.render('signin');
    }
}

module.exports.signup=function(req,res){
    console.log('coming here');
    if(req.isAuthenticated()){
        return res.render('loggedin');
    }else{
    return res.render('signup');
}
}
module.exports.signin=function(req,res){
    if(req.isAuthenticated()){
        return res.render('loggedin');
    }
    else{
    return res.render('signin');
   }
}

module.exports.logout=function(req,res){
    req.logout();
    return res.redirect('/signin');
}

module.exports.createSession=function(req,res){

    return res.redirect('/signin');
}