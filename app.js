const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();      

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

require('./src/app/controllers/index')(app);

console.log("Escutando na porta", process.env.port || 3000);

app.listen(process.env.port || 3000);