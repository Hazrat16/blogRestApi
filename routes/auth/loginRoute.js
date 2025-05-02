const { login } = require('../../controllers/authControllers/login');

loginRoute = require('express').Router();

loginRoute.post('/', login);

exports.loginRoute = loginRoute;