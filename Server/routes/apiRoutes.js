const express = require('express');
const fs = require('fs');

const routes = express.Router();

routes.get("/", (req, res) => {
    res.json({mssg:"Hello"});
});

routes.post("/postHtml", (req, res) => {
    const html = req.body.data;
    const fileName = Date.now();
    const path = `./files/${fileName}.html`;
    const serverPath = `${fileName}`
    fs.writeFile(path, html ,(err) => {
        if(err) throw err;
        res.json({msg: `Data recieved. ${html}`,path: `${serverPath}`})
    })
});

module.exports = routes;