const express=require('express');
const router=express.Router();

const passport=require('passport');


  router.get('/',require('../controllers/home').login);
  router.get('/signup',require('../controllers/home').signup);
  router.get('/signin',require('../controllers/home').signin);
  router.get('/logout',require('../controllers/home').logout);
  
  router.post('/createSession',passport.authenticate('local', {failureRedirect:'/'} 
  ),require('../controllers/home').createSession);
  
  router.post('/create',require('../controllers/signup').signup);

  module.exports=router;