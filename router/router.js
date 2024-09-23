const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

const signUp = require('../controller/singup_controller.js');
const logIn = require('../controller/login_controller.js')

router.get('/' , controller.defaultController);
router.get('/myProfile' , controller.profileController);
router.get('/signUp',signUp.signUpform)
router.post('/signUpCon',signUp.signUpController)
router.get('/login',logIn.logIn)
router.post('/logInController',logIn.logInController);


module.exports = router;