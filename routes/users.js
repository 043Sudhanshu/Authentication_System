const express=require('express');
const router=express.Router();

const passport=require('passport');

const users=require('../controllers/users');

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));  // req sent to google
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),require('../controllers/home').createSession);

router.post('/passwordreset',users.passwordreset);

router.get('/forgotpage',users.forgotpage);
router.get('/newpassword',users.newpassword);

router.post('/sendlink',users.sendlink);

router.post('/mail',users.resetThroughMail);


module.exports=router;