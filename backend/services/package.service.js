const packageService = (packageRepository) => {
    
    const getPackages = async () => {
        const result = await packageRepository.getPackages();

        return result;
    }

    const createPackages = async (payload) => {
        const result = await packageRepository.createPackages(payload);

        return result;
    }

    return {
        getPackages,
        createPackages
    }
}


module.exports = packageService;