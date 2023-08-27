const packageRepository = require("../repositories/package.repository")
const packageService = require("../services/package.service")(packageRepository)

const getPackages = async (req, res) => {

    try {
        const result = await packageService.getPackages();

        res.json(result);
    } catch (error) {
        console.log('getPackages: ' + error.message)
        res.json({ errorDetail: error })
    }
}

const createPackages = async (req, res) => {

    try {
        const payload = req.body;

        const result = await packageService.createPackages(payload);

        res.json(result);
    } catch (error) {
        console.log('createPackages: ' + error.message)
        res.json({ errorDetail: error.message })
    }
}

module.exports = {
    getPackages,
    createPackages
}