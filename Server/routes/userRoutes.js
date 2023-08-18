const express = require('express');

const routes = express.Router();
const { newUser, login } = require('../controllers/userControllers');

routes.get('/', (req, res) => {
    res.json({mssg:"Hello"});
})

routes.post('/signUp', newUser);

routes.post('/login', login);

module.exports = routes;