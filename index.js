const express = require('express');
const cors = require('cors');
const databaseConnection = require('./src/database/database');
const characterRoutes = require('./src/characters/characters.routes');
const userRoutes = require('./src/users/users.routes');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/characters', characterRoutes);



app.listen(port, () => {
    console.log(`Server Running in http:${port}`)
});
