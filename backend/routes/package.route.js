const express = require("express");
const { getPackages } = require("../controllers/package.controller")


const router = express.Router();
router.route('/').get(getPackages);

module.exports = router