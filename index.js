const express=require('express');
const app=express();

const db=require('./config/mongoose');
const user=require('./models/user');


const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use(express.static('assets'));

const passport=require('passport');
const passportLocalStrategy=require('./config/passport-local');

const session=require('express-session');
const mongoStore=require('connect-mongo')(session);



app.use(session({
   name:'Social',
   secret:'CHAUHANSUDHANSHU',
   saveUninitialized:false,
   resave:false,
   cookie:{
   maxAge:(1000*60*60)
   },
   store:(new mongoStore({
     mongooseConnection:db,
     autoRemove:'disabled'
   },function(err){console.log(err || "connected to mongostore") }))
}));
 
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(passport.setUserToLocals);

 const passportOauth2startegy=require('./config/passport-google-oauth');

app.use('/',require('./routes'));



app.listen(8000,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('server is running');
});