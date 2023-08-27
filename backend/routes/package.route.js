const express = require("express");
const { getPackages, createPackages } = require("../controllers/package.controller")


const router = express.Router();
router.route('/').get(getPackages).post(createPackages);

module.exports = router