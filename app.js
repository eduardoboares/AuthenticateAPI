const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();      

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

require('./src/app/controllers/index')(app);

console.log("Escutando na porta", process.env.PORT || 3000);

app.listen(process.env.PORT || 3000);