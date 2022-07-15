const mongoose = require('mongoose');

const databaseConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongodb connected'))
    .catch((err) => console.log(`error connecting to database: ${err}`));
};

module.exports = databaseConnection;
