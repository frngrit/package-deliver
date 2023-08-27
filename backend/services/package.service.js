const packageRepository = require("../repositories/package.repository")

const getPackages = async () => {
    const result = await packageRepository.getPackages();

    return result;
}

module.exports = {
    getPackages
}