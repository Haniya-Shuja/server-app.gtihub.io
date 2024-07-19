


// require("dotenv").config();

// const express = require("express");
// const cors = require('cors')
// const app = express();
// const router = require("./routes/auth-route");
// const connectDb = require("./utils/db");

// // Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
// app.use(express.json());
// app.use(cors()); // This will allow all origins

// app.use("/api/auth", router);

// app.get ('/', (req,res) => {
//   res.send('Hello world')
// });

// const PORT = 3000;

// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`server is running at port: ${PORT}`);
//   });
// });



// module.exports = app;


// require("dotenv").config();

// const express = require("express");
// const cors = require('cors');
// const connectDb = require("./utils/db");
// const router = require("./routes/auth-route");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors()); // Allow all origins

// // Routes
// app.use("/api/auth", router);

// // Home route
// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// // Connect to the database and start the server
// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running at port: ${PORT}`);
//   });
// }).catch(error => {
//   console.error("Failed to connect to the database", error);
// });





require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
// const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");

// to get the json data in express app.
app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);


const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});