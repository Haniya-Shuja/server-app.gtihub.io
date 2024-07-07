


// require('dotenv').config(); // Load environment variables from .env

// const express = require('express');
// const connectDB = require('../server/utils/db'); // Import the connectDB function

// const app = express();
// const router = require('./router/auth-router'); // Ensure this path is correct

// app.use(express.json()); // Middleware to parse JSON

// // Connect to the database
// connectDB();

// app.use('/api/auth', router);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running at port: ${PORT}`);
// });




require("dotenv").config();

const express = require("express");
const cors = require('cors')
const app = express();
const router = require("./routes/auth-route");
const connectDb = require("../server/utils/db");

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use(express.json());
app.use(cors()); // This will allow all origins

app.use("/api/auth", router);

app.get ('/', (req,res) => {
  res.send('Hello world')
});

const PORT = 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});



module.exports = app;