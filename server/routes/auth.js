const express = require('express');
const router = express.Router();
const register_controller = require('../controller/auth_account');

router.post('/register', register_controller.registerAccount);


router.post('/login', register_controller.loginAccount);

router.get('/loginStatus', register_controller.loginStatus);

router.post('/logout', register_controller.logout);

router.get('/userData', register_controller.userData);


module.exports = router;