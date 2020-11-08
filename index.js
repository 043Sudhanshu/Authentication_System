const express=require('express');
const app=express();

const db=require('./config/mongoose');
const user=require('./models/user');


const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/',function(req,res){
  return res.render('signup');
});
app.post('/create',function(req,res){
    user.create(
     req.body
     ,function(err,USER){
         return res.render('signin');
        });
       
});

app.listen(8000,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('server is running');
});