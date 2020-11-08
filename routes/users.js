const express=require('express');
const router=express.Router();

const passport=require('passport');

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));  // req sent to google
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),require('../controllers/home').createSession);

module.exports=router;