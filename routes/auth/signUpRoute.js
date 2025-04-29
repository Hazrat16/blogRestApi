const { signUp } = require('../../controllers/authControllers/signUp');

signUpRoute = require('express').Router();

signUpRoute.post('/', signUp);

exports.signUpRoute = signUpRoute;