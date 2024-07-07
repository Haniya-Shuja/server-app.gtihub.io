
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     userName: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// }, {
//     timestamps: true
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// define the model or the collection name
const User = mongoose.model('User', userSchema);

module.exports = User;