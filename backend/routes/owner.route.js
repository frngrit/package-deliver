const express = require("express");
const ownerController = require("../controllers/owner.controller")


const router = express.Router();
router.route('/').get(ownerController.getOwners);

module.exports = router