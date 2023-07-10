require('dotenv').config()

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(express.static('files'))


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

const port = process.env.PORT;

app.use('/', apiRoutes);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});