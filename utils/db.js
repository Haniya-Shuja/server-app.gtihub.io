

// const mongoose = require('mongoose');

// const URI = process.env.MONGO_URI;

// const connectDB = async () => {
//   console.log('Attempting to connect to MongoDB...');

//   try {
//     await mongoose.connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Connection to MongoDB failed:', error.message);
//     process.exit(0);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin_panel";
const URI = process.env.MONGO_URI;
console.log(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;

