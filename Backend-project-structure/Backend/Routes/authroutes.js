const express = require('express');
const routes  = express.Router();
const {validateSignup} = require('../Middleware/signupmiddleware')
const { signupController } = require('../Controller/signupcontroller')

routes.post("/signup", validateSignup, signupController);


module.exports  = {routes}