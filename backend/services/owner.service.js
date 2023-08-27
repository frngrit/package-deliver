const ownerRepository = require("../repositories/owner.repository")

const getOwners = async () => {
    const result = await ownerRepository.getOwners();

    return result;
}

module.exports = {
    getOwners
}