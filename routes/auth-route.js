const express = require ('express');
const router = express.Router();
const authcontroller = require('../controller/auth-controller')

router.route('/').get( authcontroller.home)

  
router.post('/register', authcontroller.register)


  module.exports = router;


