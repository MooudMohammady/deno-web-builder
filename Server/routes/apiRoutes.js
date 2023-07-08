const express = require('express');
const fs = require('fs');

const routes = express.Router();

routes.get("/", (req, res) => {
    res.json({mssg:"Hello"});
});

routes.post("/", (req, res) => {
    const html = req.body.data;
    res.json({msg: `Data recieved. ${html}`})
    console.log(html);
});

module.exports = routes;