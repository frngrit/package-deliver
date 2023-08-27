const packageRepository = require("../repositories/package.repository")
const packageService = require("../services/package.service")(packageRepository)

const getPackages = async (req, res) => {
    const result = await packageService.getPackages();

    res.json(result);
}

module.exports = {
    getPackages
}