const express = require("express");

const router = express.Router();
const {registerUser, authUser} = require('../controllers/userControllers');

router.route("/").post(registerUser).get(allUsers);
router.post('/login',authUser);


module.exports = router;
