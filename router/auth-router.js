// const express = require ('express');
// const router = express.Router();
// const authcontroller = require('../controller/auth-controller')

// router.route('/').get( authcontroller.home)

  
// router.post('/register', authcontroller.register)


//   module.exports = router;


// const express = require('express');
// const router = express.Router();

// const authController = require('../controllers/auth-controller');


// router.get('/', authController.home);
// router.post('/register', authController.register);

// module.exports = router;


const express = require("express");
const router = express.Router();
const authControllers = require("../controller/auth-controller");

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;