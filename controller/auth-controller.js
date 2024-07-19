

// const User = require('../models/user-model');

// const home = async (req, res) => {
//     try {
//         res.status(200).send('Welcome react router');
//     } catch (error) {
//         console.log('error');
//     }
// };

// const register = async (req, res) => {
//     try {
//         console.log(req.body);

//         const { userName, email, phone, password } = req.body;

//         const userExist = User.findOne({ email: email });

//         if (userExist) {
//             return res.status(400).json({ msg: "Email already exists" });
//         }

//         const newUser = await User.create({ userName, email, phone, password });

//         res.status(200).json({ data: newUser });
//     } catch (error) {
//         console.error(error);
//         res.status(400).send({ msg: "Error occurred" });
//     }
// };

// module.exports = { home, register };


const User = require("../models/user-model");


// *-------------------
// Home Logic
// *-------------------
// const home = async (req, res) => {
//   try {
//     res.status(200).json({ msg: "Welcome to our home page" });
//   } catch (error) {
//     console.log(error);
//   }
// };


// const register = async (req, res) => {
//     try {
//     //   const data = req.body;
//       console.log('req body: ', req.body);
//       const { username, email, phone, password } = req.body;
  
//       const userExist = await User.findOne({ email});
  
//       if (userExist) {
//         return res.status(400).json({ msg: "email already exists" });
//       }
  
//       const userCreated = await User.create({ username, email, phone, password });
  
//       // res.status(201).json({ message: "User registered successfully" });
//       res.status(201).json({ msg: userCreated });
//     } catch (error) {
//       res.status(500).json({ message: "Internal server error", error: error });
//     }
//   };
  
//   module.exports = { home, register };


// Home Logic
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Register Logic
const register = async (req, res) => {
  try {
    console.log('req body: ', req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({ msg: "User registered successfully", user: userCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
// *-------------------------------
//* User Login Logic 📝
// *-------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { home, register, login };
