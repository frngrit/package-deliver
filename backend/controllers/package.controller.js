const packageService = require("../services/package.service")

const getPackages = async (req, res) => {
    const result = await packageService.getPackages();

    res.json(result);
}

module.exports = {
    getPackages
}