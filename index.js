const express = require('express');
const cors = require('cors');
const databaseConnection = require('./src/database/database');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server Running in http:${port}`)
});
