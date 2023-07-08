require('dotenv').config()

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

const port = process.env.PORT;

app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});