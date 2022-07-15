const express = require('express');
const cors = require('cors');
const databaseConnection = require('./src/database/database');
const userRoutes = require('./src/users/users.routes');
const authRoutes = require('./src/auth/auth.route');
const characterRoutes = require('./src/characters/characters.routes');
const swaggerRoutes = require('./src/swagger/swagger.routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/characters', characterRoutes);
app.use('/auth', authRoutes);
app.use('/api-docs', swaggerRoutes);




app.listen(port, () => {
    console.log(`Server Running in http:${port}`)
});
