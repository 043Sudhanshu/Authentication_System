const mongoose=require('mongoose');

const user=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }    
});

const USER=mongoose.model('users',user);

module.exports=USER;