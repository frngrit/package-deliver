const express = require("express");
const { getOwners } = require("../controllers/owner.controller")


const router = express.Router();
router.route('/').get(getOwners);

module.exports = router