const express = require('express');
const connectDB = require('./config/dbConfig');
const app = express();
const port = 5000;

connectDB();

require('dotenv').config;
app.use(express.json());

const userRoute = require('./routes/userRoutes');

app.use('/api/users', userRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
