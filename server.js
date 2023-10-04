const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
connectDb();

const port = process.env.PORT||5000;

app.use(express.json()); //Parser use to parse the body request

app.use('/api/contacts', require('./routes/contectRoutes'));

// app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});