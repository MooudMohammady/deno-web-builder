const express = require('express');
const fs = require('fs');

const routes = express.Router();
const { postHtml } = require('../controllers/dataControllers');

routes.get("/", (req, res) => {
    res.json({mssg:"Hello"});
});

routes.post("/postHtml", postHtml);

module.exports = routes;