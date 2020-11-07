const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/full_auth');

const db=mongoose.connection;
db.on('error',()=>{
    console.log("Error in connecting to db");
});
db.once('open',()=>{
    console.log("Server is connected to database successfully");
});

module.exports=db;